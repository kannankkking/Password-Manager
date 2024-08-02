import React, { useState } from 'react';
import styles from '../Css/GeneratePassword.module.css'

const GeneratePassword = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(0);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let charSet = lowerCaseChars;
        if (includeUpperCase) charSet += upperCaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSymbols) charSet += symbolChars;

        let generatedPassword = '';
        if (length < 4) {
            alert('MINIMUM PASSWORD LENGTH IS: 4')
        }
        else {
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charSet.length);
                generatedPassword += charSet[randomIndex];
            }
        }

        setPassword(generatedPassword);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.passworddisplay}>
                        <p>{password}</p>
                    </div>
                    <div className={styles.divison}>
                        {/* <div className={styles.subdivison}> */}
                            <div className={styles.passwordlength}>
                                <label htmlFor="Passwordlength">Password Length:</label>
                                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} min="4" max="32" />
                            </div>
                            <div className={styles.uppercase}>
                                <input type="checkbox" name="uppercase" id="uppercase" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} />
                                <label htmlFor="uppercase">Include UpperCase</label>
                            </div>
                            <div className={styles.numbers}>
                                <input type="checkbox" name="uppercase" id="uppercase" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                                <label htmlFor="numbers">Include Numbers</label>
                            </div>
                            <div className={styles.symbols}>
                                <input type="checkbox" name="uppercase" id="uppercase" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                                <label htmlFor="symbols">Include Symbols</label>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={generatePassword}>Generate</button>
                            </div>
                        </div>

                    </div>
                </div>
           
        </>
    );
};

export default GeneratePassword;