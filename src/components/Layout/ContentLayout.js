import React from "react";
import Cards from "../Cards/Cards";

const ContentLayout = ({
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowplayingMovies,
}) => {
  return (
    <>
      <Cards
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
        upcomingMovies={upcomingMovies}
        nowplayingMovies={nowplayingMovies}
      />
    </>
  );
};

export default ContentLayout;
