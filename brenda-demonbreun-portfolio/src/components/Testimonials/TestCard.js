import React from "react";
import styles from "./TestCard.module.css";

const TestCard = ({ BookTitle, ReviewText }) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{BookTitle}</p>
            <div className={styles.card}>
                <p className={styles.reviewBody}>{ReviewText}</p>
            </div>
        </div>
    );
}

export default TestCard;