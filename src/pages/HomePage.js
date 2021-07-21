import React from "react";

import HomePageContentLayout from "../components/Layout/HomePageContentLayout";

const HomePage = ({
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowplayingMovies,
}) => {
  return (
    <HomePageContentLayout
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      upcomingMovies={upcomingMovies}
      nowplayingMovies={nowplayingMovies}
    />
  );
};

export default HomePage;
