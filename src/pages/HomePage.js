import React from "react";

import HomePageContentLayout from "../components/Layout/HomePageContentLayout";

const HomePage = ({ popularMovies }) => {
  return <HomePageContentLayout popularMovies={popularMovies} />;
};

export default HomePage;
