import React from "react";
import styles from "./style.module.css";

const LPTagline = () => {
    return (
        <>
            <div className={styles.tagline}>
                <div className="tagline-text-wrapper" id="flex-5">
                    <h4 className={styles.taglineText}>RECYCLE</h4>
                    <h4 className={styles.taglineText}>HUB</h4>
                </div>
                <div className={styles.taglineImg} id="flex-2">
                    <img
                        src="https://i.ibb.co/8j7Czb2/hero-1.png"
                        id={styles.img}
                    />
                </div>
                <div className={styles.taglineText2} id="flex-5">
                    <h1 className={styles.taglineText2}>FOR BETTER</h1>
                    <div className={styles.taglineWrapper}>
                        <div className={styles.taglineCard}>GENERATION</div>
                        <h1 className={styles.taglineText2}>FUTURE</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LPTagline;
