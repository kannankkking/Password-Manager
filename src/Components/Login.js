import React, { useState } from 'react'
import styles from '../Css/Login.module.css';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const { IpAddress } = location.state || {};
    const [ address , setAddress] = useState(IpAddress);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        if (username == '') {
            alert("Username is Empty")
        }
        else if (password == '') {
            alert("Password is Empty")
        }
        else {
            const handleResult = await CheckAuth(username, password, IpAddress)
            if(handleResult === '{"message":[200,"Login Successfull"]}'){
                navigate('/Data',{ state: { address } })
            }
            else{
                console.log("fail")
                alert("invalid")
            }
        };
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.tittle}>
                        <h1>LOGIN</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className={styles.inp}>
                           
                                <input type="text" placeholder='Enter UserName' onChange={(e) => setUsername(e.target.value)} />
                                <FaRegUser className={styles.icons} />
                          
                        </div>
                        <div className={styles.pass}>
                           
                                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                                <RiLockPasswordLine className={styles.icons} />
                            
                        </div>
                        <div className={styles.buton}>
                            <button type='submit'>SUBMIT</button>
                        </div>
                        <div className={styles.link}>
        <a href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'><FaInstagramSquare style={{width:"50px",height:"40px"}}/>   
        </a> 
         
         <a href='https://www.google.com/search?q=facebook+login&oq=face&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMgYIAhBFGDkyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTE0M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8'>
         <ImFacebook2 style={{width:"50px",height:"40px"}} /> </a> 
         <a href='https://x.com/?lang=en-in'>
         <FaSquareXTwitter style={{width:"50px",height:"40px"}} /> </a> 
        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;



function CheckAuth(username, password, url) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");
    const raw = JSON.stringify({
        "data": {
          "Name": username,
          "Password": password
        }
      });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(`http://${url}/api/method/jinpass.jinpass.api.user_auth`, requestOptions)
    .then((response) => response.text())
    .then((result) => {return result})
    .catch((error) => console.error(error));
}