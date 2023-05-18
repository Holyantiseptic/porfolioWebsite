import React from "react";
import Card from "./card";

const CardList = (data) => {
    const cards = data.map( card => 
        <Card
            cardData = {card}
        />);
    }
    return(
        <div>
           {cards} 
        </div>
    )
export default CardList;ç