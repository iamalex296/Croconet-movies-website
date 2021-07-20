import React from "react";

import ContentLayout from "../components/Layout/ContentLayout";

const HomePage = ({
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  nowplayingMovies,
}) => {
  return (
    <ContentLayout
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      upcomingMovies={upcomingMovies}
      nowplayingMovies={nowplayingMovies}
    />
  );
};

export default HomePage;
