import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './style.module.css';

export default function Feedback() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => setIsOpen(!isOpen);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mgdklrf', 'template_8tfc8zu', e.target, '1a6aHxEAzXmMBSep5')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                toggleDialog(); // Close the dialog on success
            }, (error) => {
                console.log('Failed to send email.', error.text);
            });
    };

    return (
        <div>
            <button className={styles['feedback-button']} onClick={toggleDialog}>
                Feedback
            </button>

            {isOpen && (
                <div className={styles['dialog-background']}>
                    <div className={styles['dialog']}>
                        <button className={styles["close-button"]} onClick={toggleDialog}>×</button>
                        <h2>Feedback</h2>
                        <form onSubmit={sendEmail}>
                            <input name="name" type="text" placeholder="Your name" required />
                            <input name="company" type="text" placeholder="Your company" />
                            <input name="email" type="email" placeholder="Your email" required />
                            <textarea name="message" placeholder="Your feedback" rows="8" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}