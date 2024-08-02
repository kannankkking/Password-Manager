import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from  "../Css/UpdatePage.module.css"
function UpdatePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        username: 'user123',
        password: 'pass123',
        url: 'https://example.com',
        notes: 'Write Something',
    });

    useEffect(() => {
        if (location.state && location.state.updatedData) {
            setData(location.state.updatedData);
        }
    }, [location.state]);

    const handleEdit = () => {
        navigate('/Editpage', { state: { data } });
    };

    return (
        <div className={styles.cont}>
            <div className={styles.container}>
                <div className={styles.user}>
                    <label htmlFor="user">Username  </label><br />
                        
                            <input type="text" name='username' value={data.username} />
                        
                  
                </div>
                <div className={styles.updatepassword}>
                    <label htmlFor="user">Password <br />
                        
                            <input type="password" name='password' value={data.password} />
                        
                    </label>
                </div>
                <div className={styles.updateurl}>
                    <label htmlFor="user">URL  <br />

                            <input type="text" name='url' value={data.url} />
                                            </label>
                </div>
                <div className={styles.updatecheck}>
                    <input type="checkbox"/>
                    <span>Favorite</span>
                </div>
                <div className={styles.updatenotes}>
                    <label htmlFor="notes">Notes:
                        <div className="textbox">
                            <textarea name="notes" id="notes" value={data.notes} style={{width:"200px",height:"50px"}}></textarea></div>
                    </label>
                </div>
                <div className={styles.updatebutton}>
                    <button className='Btn' onClick={handleEdit}>Edit
                       
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdatePage;