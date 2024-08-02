import React, { useState } from 'react'
import styles from '../Css/Url.module.css';
import { FaLink } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"

const Url = () => {
    const [IpAddress, setIpAddress] = useState('');
    const navigate = useNavigate();

    const Handlenext = () => {
        navigate('/login', { state: { IpAddress } });
    }

    return (
       <>
       <div className={styles.container} >
        <div className={styles.navbox}>
            <nav>
                <h1>URL</h1>
            </nav>
            <form >
                <div className={styles.urltext}>
                <input type="text" value={IpAddress}placeholder='Enter your Url code' onChange={(e)=>setIpAddress(e.target.value)} />

                <FaLink />

            <button onClick={Handlenext}type='submit'>Get</button>
                </div>
            </form>

        </div>
       </div>
       
       
       </>
      )
}

export default Url;