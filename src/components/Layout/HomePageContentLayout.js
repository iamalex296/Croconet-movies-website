import React from "react";
import Cards from "../Cards/Cards";

const HomePageContentLayout = ({
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowplayingMovies,
}) => {
  return (
    <>
      <Cards
        moviesData={popularMovies}
        id={1}
        title="პოპულარული"
        sliceLastIndex="6"
      />

      <Cards
        id={2}
        moviesData={topRatedMovies}
        title="მაღალრეიტინგლი"
        sliceLastIndex="6"
      />

      <Cards
        id={3}
        moviesData={upcomingMovies}
        title="პრემიერა"
        sliceLastIndex="12"
      />

      <Cards
        id={4}
        moviesData={nowplayingMovies}
        title="ახალი ფილმები"
        sliceLastIndex="18"
      />
    </>
  );
};

export default HomePageContentLayout;
