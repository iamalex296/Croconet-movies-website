import React from "react";

import HomePageContentLayout from "../components/Layout/HomePageContentLayout";

const HomePage = ({ popularMovies, topRatedMovies, nowplayingMovies }) => {
  return (
    <HomePageContentLayout
      popularMovies={popularMovies}
      // topRatedMovies={topRatedMovies}
      nowplayingMovies={nowplayingMovies}
    />
  );
};

export default HomePage;
