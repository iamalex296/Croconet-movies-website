import React from "react";

import SingleCard from "./SingleCard";
import classes from "./Cards.module.css";
import ContentContainer from "../../UI/ContentContainer";

const Cards = ({ dummyData }) => {
  return dummyData.map((item) => (
    <ContentContainer key={item.id} title={item.title}>
      <div className={classes["cards-container"]}>
        {dummyData.map((item) => (
          <SingleCard key={item.id} imgSrc={item.img} altText={item.id} />
        ))}
      </div>
    </ContentContainer>
  ));
};

export default Cards;
