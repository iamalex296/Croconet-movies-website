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

  // console.log("moviesData", moviesData);

  return (
    <>
      <ContentContainer
        key={id}
        id={id}
        title={title}
        sliceLastIndex={sliceLastIndex}
      >
        <div className={classes["cards-container"]}>
          {moviesData.results
            .slice(0, sliceLastIndex)
            .map((singleMovieDataObj) => (
              <>
                <SingleCard
                  key={singleMovieDataObj.id}
                  imgSrc={singleMovieDataObj.poster_path}
                  altText={singleMovieDataObj.id}
                  openLeft={classes["left-position"]}
                  operRight={classes["right-position"]}
                  singleMovieDataObj={singleMovieDataObj}
                  genreIds={singleMovieDataObj.genre_ids}
                />
              </>
            ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Cards;
