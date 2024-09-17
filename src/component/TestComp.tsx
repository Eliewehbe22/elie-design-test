'use client'
import React, { useState } from 'react';
import styles, { TestComp } from "./TestComp.type";

const Test = ({ message, isClicked, handleButtonClick }: TestComp) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email.');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value: string) => {
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    return (
        <div className={styles.subContainer}>
            <p> Welcome {message}</p>
            <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className={styles.input}
                    />
                    {emailError && <span className={styles.error}>{emailError}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={styles.input}
                    />
                    {passwordError && <span className={styles.error}>{passwordError}</span>}
                </div>
                </div>
                <button
                    className={`${styles.button} ${isClicked ? styles.buttonClicked : ''}`}
                    onClick={handleButtonClick}
                    disabled={!!emailError || !!passwordError} // Disable button if there are errors
                >
                    {isClicked ? 'Logged In!' : 'Login'}
                </button>
            </div>
            );
            };

            export default Test;
