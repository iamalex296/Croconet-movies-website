import React, { useState } from "react";

import { Link } from "react-router-dom";

import SingleCard from "./SingleCard";
import ContentContainer from "../../UI/ContentContainer";

import classes from "./Cards.module.css";

const Cards = ({ title, moviesData, sliceLastIndex, id, linkPath }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWidth]);

  console.log("moviesData", moviesData);
  // console.log("link", linkPath);
  return (
    <>
      <ContentContainer
        linkPath={linkPath}
        key={id}
        id={id}
        title={title}
        sliceLastIndex={sliceLastIndex}
      >
        <div className={classes["cards-container"]}>
          {moviesData.results
            .slice(0, sliceLastIndex)
            .map((singleMovieDataObj) => (
              <Link to={`/movies/${singleMovieDataObj.id}`}>
                <SingleCard
                  key={singleMovieDataObj.id}
                  imgSrc={singleMovieDataObj.poster_path}
                  altText={singleMovieDataObj.id}
                  openLeft={classes["left-position"]}
                  operRight={classes["right-position"]}
                  singleMovieDataObj={singleMovieDataObj}
                  genreIds={singleMovieDataObj.genre_ids}
                />
              </Link>
            ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Cards;
