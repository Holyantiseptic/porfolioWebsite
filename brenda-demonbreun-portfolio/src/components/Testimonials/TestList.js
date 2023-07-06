import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css"

const CardList = ({ dataList }) => {
    return(
        <div className={styles.container}>
            {dataList.map((data) => {
                return (
                    <Card
                        key={data.id}
                        BookTitle={data.BookTitle}
                        ReviewText={data.ReviewText}
                        
                    />
                );
            })}
        </div>
    );
}
export default CardList;