import React from "react";
import PopularMoviesPageContentLayout from "../components/Layout/PopularMoviesPageContentLayout";

const PopularMoviesPage = ({ popularPageMoviesData }) => {
  return (
    <PopularMoviesPageContentLayout
      popularPageMoviesData={popularPageMoviesData}
    />
  );
};

export default PopularMoviesPage;
