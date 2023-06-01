import React from "react";
import styles from "./Card.module.css"
import Image from "next/image";

const Card = ({ BookTitle, AmazonAffiLink, BookImage}) => {
    return(
        <div className={styles.card}>
            <Image
            src={BookImage}
            width={300}
            height={200}
            alt="Book Image"
            />
            <p>{BookTitle}</p>
            <p>{AmazonAffiLink}</p>
        </div>
    );
}

export default Card;