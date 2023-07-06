import React from "react";
import styles from "./Card.module.css"

const Card = ({ BookTitle, ReviewText }) => {
    return(
        <div className={styles.card}>
            <p>{BookTitle}</p>
            <p>{ReviewText}</p>
        </div>
    );
}

export default Card;