import React, { useState } from "react";

import SingleCard from "./SingleCard";
import ContentContainer from "../../UI/ContentContainer";

import classes from "./Cards.module.css";

const Cards = ({
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowplayingMovies,
}) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowInnerWidth(window.innerWidth);
    });
  }, [windowInnerWidth]);

  return (
    <>
      <ContentContainer key={1} id={1} title={"პოპულარული"}>
        <div className={classes["cards-container"]}>
          {popularMovies.results.slice(0, 6).map((item) => (
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

      <ContentContainer key={2} id={2} title={"მაღალ რეიტინგული"}>
        <div className={classes["cards-container"]}>
          {topRatedMovies.results.slice(0, 6).map((item) => (
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

      <ContentContainer key={3} id={3} title={"პრემიერა"}>
        <div className={classes["cards-container"]}>
          {upcomingMovies.results.slice(0, 12).map((item) => (
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

      <ContentContainer key={3} id={3} title={"ახალი ფილმები"}>
        <div className={classes["cards-container"]}>
          {nowplayingMovies.results.slice(0, 18).map((item) => (
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
