import React from "react";

import SingleCard from "./SingleCard";
import classes from "./Cards.module.css";
import ContentContainer from "../../UI/ContentContainer";

const Cards = ({ dummyData }) => {
  return (
    <ContentContainer>
      <div className={classes["cards-container"]}>
        {dummyData.map((item) => (
          <SingleCard imgSrc={item.img} altText={item.id} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default Cards;
