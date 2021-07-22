import React from "react";
import Cards from "../Cards/Cards";

const PopularMoviesPageContentLayout = ({ popularPageMoviesData }) => {
  return (
    <div>
      <Cards
        moviesData={popularPageMoviesData}
        id={5}
        title="პოპულარული"
        sliceLastIndex="18"
      />
    </div>
  );
};

export default PopularMoviesPageContentLayout;
