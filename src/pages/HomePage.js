import React from "react";

import HomePageContentLayout from "../components/Layout/HomePageContentLayout";

const HomePage = ({ popularMovies, nowplayingMovies }) => {
  return (
    <HomePageContentLayout
      popularMovies={popularMovies}
      nowplayingMovies={nowplayingMovies}
    />
  );
};

export default HomePage;
