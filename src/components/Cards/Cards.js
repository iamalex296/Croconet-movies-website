import React from "react";

import SingleCard from "./SingleCard";
import ContentContainer from "../../UI/ContentContainer";

import classes from "./Cards.module.css";

const Cards = ({ dummyData }) => {
  return dummyData.map((item) => (
    <ContentContainer key={item.id} id={item.id} title={item.title}>
      <div className={classes["cards-container"]}>
        {dummyData.map((item) => (
          <>
            <SingleCard key={item.id} imgSrc={item.img} altText={item.id} />
          </>
        ))}
      </div>
    </ContentContainer>
  ));
};

export default Cards;
