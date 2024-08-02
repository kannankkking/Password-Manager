import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Css/EditPage.module.css';
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const addressUrl = useLocation();
    const { address } = addressUrl.state || {};
    const { usertitle, username, url, notes, password } = location.state || {};
    let selectedItem = {
        "id": 0,
        "name": usertitle,
    }

    const [formData, setFormData] = useState({
        address: address,
        usertitle: usertitle || '',
        username: username || '',
        password: password || '',
        url: url || '',
        notes: notes || ''
    });
    console.log(formData)
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = () => {
        navigate("/generatepassword");
    };
    console.log("click", selectedItem)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await Handlepage(
            formData.address,
            formData.username,
            formData.password,
            formData.url,
            formData.notes,
            formData.usertitle
        );
       
        if (response.status === 200) {
            alert("Password Successfully Updated");
            navigate(`/updatepage/${usertitle}`, { state: { address, selectedItem } });

        } else if (response.status === 404) {
          
        } else {
            alert("An error occurred");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.button1}>
                        <button type="button" onClick={handleClick}>Generate Password</button>
                    </div>
                    <p>{formData.usertitle}</p>
                    <div className={styles.details}>
                        <label htmlFor="username">Username</label>
                        <div className={styles.content}>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.content}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div type="button" className={styles.click} onClick={togglePasswordVisibility}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <BsEye />}
                            </div>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="url">URL</label>
                        <div className={styles.content}>
                            <input type="text" name="url" value={formData.url} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.fav}>
                        <label>
                            <input type="checkbox" />
                            <span>Favorite</span>
                        </label>
                    </div>
                    <div className={styles.notes}>
                        <label htmlFor="notes">Notes</label>
                        <div className="textbox">
                            <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className={styles.button2}>
                      
                            <button type='update'>Update
                         
                            </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EditPage;

async function Handlepage(url, Updateusername, Updatepassword, Updateurl, Updatenotes, Usertitle) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

    const raw = JSON.stringify({
        "data": {
            "Name": Usertitle,
            "User Name": Updateusername,
            "Password": Updatepassword,
            "URL": Updateurl,
            "Notes": Updatenotes
        }
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch(`http://${url}/api/method/jinpass.jinpass.api.edit_password`, requestOptions);
        const result = await response.json();
        console.log(result)
        return {
            status: response.status,
            result: result
        };
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            result: error.message
        };
    }
}