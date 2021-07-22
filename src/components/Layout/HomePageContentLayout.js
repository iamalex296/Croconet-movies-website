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
        linkPath="/popular"
      />

      <Cards
        id={2}
        moviesData={topRatedMovies}
        title="მაღალრეიტინგლი"
        sliceLastIndex="6"
        linkPath="/movies"
      />

      <Cards
        id={3}
        moviesData={upcomingMovies}
        title="პრემიერა"
        sliceLastIndex="12"
        linkPath="/trailers"
      />

      <Cards
        id={4}
        moviesData={nowplayingMovies}
        title="ახალი ფილმები"
        sliceLastIndex="12"
        linkPath="/series"
      />
    </>
  );
};

export default HomePageContentLayout;
