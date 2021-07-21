import React, { useState } from "react";

import SingleCard from "./SingleCard";
import ContentContainer from "../../UI/ContentContainer";

import classes from "./Cards.module.css";

const Cards = ({ title, moviesData, sliceLastIndex, id }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWidth]);

  return (
    <>
      <ContentContainer key={id} id={id} title={title}>
        <div className={classes["cards-container"]}>
          {moviesData.results.slice(0, sliceLastIndex).map((item) => (
            <>
              <SingleCard
                key={item.id}
                imgSrc={item.poster_path}
                altText={item.id}
                openLeft={classes["left-position"]}
                operRight={classes["right-position"]}
              />
            </>
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Cards;
