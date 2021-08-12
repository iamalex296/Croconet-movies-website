import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions/popularMoviesActions";

import Cards from "../Cards/Cards";

const PopularMoviesPageContentLayout = () => {
  const popularPageMoviesData = useSelector(
    (state) => state.popularMovies.popularMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

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
