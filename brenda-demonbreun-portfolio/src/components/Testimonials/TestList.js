import React from "react";
import styles from "./TestList.module.css";
import TestCard from "./TestCard";

const TestList = ({ dataList }) => {
    return (
        <div className={styles.container}>
            {dataList.map((data) => {
                return (
                    <TestCard
                        key={data.id}
                        BookTitle={data.BookTitle}
                        ReviewText={data.ReviewText}
                    />
                );
            })}
        </div>
    );
}
export default TestList;