import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css"

const CardList = ({ cardData }) => {
    return(
        <div className={styles.container}>
            {cardData.map((card) => {
                return (
                    <Card
                        key={card.id}
                        BookTitle={card.BookTitle}
                        AmazonAffiLink={card.AmazonAffiLink}
                        BookImage={card.BookImage}
                        height={card.height}
                        width ={card.width}
                    />
                );
            })}
        </div>
    );
}
export default CardList;