import React from "react";

const Card = (cardData) => {
    <div>
        <p>{cardData.ID}</p>
        <p>{cardData.BookTitle}</p>
        <p>{cardData.AmazonAffiLink}</p>
    </div>
}

export default Card;