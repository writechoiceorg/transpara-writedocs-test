import React, { useState } from 'react';
import styles from './style.module.css';

export default function Feedback() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => setIsOpen(!isOpen);

    return (
        <div>
            <button className={styles['feedback-button']} onClick={toggleDialog}>
                Give Feedback
            </button>

            {isOpen && (
                <div className={styles['dialog-background']}>
                    <div className="dialog">
                        <button className={styles["close-button"]} onClick={toggleDialog}>×</button>
                        <h2>Feedback</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            // Form submission logic here
                            toggleDialog();
                        }}>
                            <input name="name" type="text" placeholder="Your name" required />
                            <input name="email" type="email" placeholder="Your email" required />
                            <textarea name="description" placeholder="Your feedback" rows="4" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
