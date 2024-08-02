
// import { useState } from 'react';
import styles from '../Css/PasswordEdit.module.css';
import { useNavigate } from 'react-router-dom';
import { FaCopy } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa6";




const PassWordEdit = () => {
    const data = {
        username: 'example_user',
        password: 'example_password',
        url: 'https://example.com',
        notes: 'example notes about the data',
    };
    const navigate = useNavigate();
    const nav = useNavigate();
    const handleEdit = () => {
        navigate('/EditPage', { state: { data } });

    };
    const HandleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Text Copies SuccessFully");
        }
        catch (err) {
            console.error("failed to copy:", err)
        }
    }



    return (
        <div className={styles.slide}>
            <div className={styles.over}>

                <div className={styles.detail}>
                    <label htmlFor="user">  Username </label>
                    <div className={styles.int}>
                        <input type="text" value={data.username} />
                        <FaCopy onClick={() => HandleCopy(data.username)} className={styles.icon} />
                    </div>
                </div>

                <div className={styles.detail}>
                    <label htmlFor="user"> password  </label>
                    <div className={styles.int}>
                        <input type="password" value={data.password} /> 
                        <FaCopy onClick={() => HandleCopy(data.password)} className={styles.icon} />

                    </div>
                </div>
                <div className={styles.detail}>
                    <label htmlFor="user"> URL </label>
                    <div className={styles.int}>
                        <input type="text" value={data.url} />
                        <FaCopy onClick={() => HandleCopy(data.url)} className={styles.icon} />
                    </div>
                </div>
                <div className={styles.favourite}>
                    <input type="checkbox" />
                    <span>Favourite</span>
                </div>

                <div className={styles.textarea}>
                    <textarea name="" id="">{data.notes}</textarea>
                </div>

                <div className={styles.bttn}>
                    <button onClick={handleEdit}>Edit</button>
                </div>


            </div>

        </div>
    )
}

export default PassWordEdit;