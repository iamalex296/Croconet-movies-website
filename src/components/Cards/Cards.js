import React, { useState } from "react";

import SingleCard from "./SingleCard";
import ContentContainer from "../../UI/ContentContainer";

import classes from "./Cards.module.css";

const Cards = ({ dummyData }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWidth]);

  return dummyData.map((item) => (
    <ContentContainer key={item.id} id={item.id} title={item.title}>
      <div className={classes["cards-container"]}>
        {dummyData.map((item) => (
          <>
            <SingleCard
              key={item.id}
              imgSrc={item.img}
              altText={item.id}
              openLeft={classes["left-position"]}
              operRight={classes["right-position"]}
            />
          </>
        ))}
      </div>
    </ContentContainer>
  ));
};

export default Cards;
