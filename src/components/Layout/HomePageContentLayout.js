import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUpcomingMovies } from "../../redux/actions/upcomingMoviesActions";
import { fetchTopRatedMovies } from "../../redux/actions/topRatedMoviesActions";

import Loader from "../../UI/Loader";

import Cards from "../Cards/Cards";

const HomePageContentLayout = ({
  popularMovies,
  topRatedMovies,
  nowplayingMovies,
  upcomingMovies,
  fetchUpcomingMoviesData,
  fetchTopRatedMoviesData,
}) => {
  // const upcomingMovies = useSelector((state) =>
  //   console.log("sls", state.upcomingMovies.upcomingMovies)
  // );

  // console.log("fefe", fetchUpcomingMovies());

  useEffect(() => {
    fetchUpcomingMoviesData();
  }, [fetchUpcomingMoviesData]);

  useEffect(() => {
    fetchTopRatedMoviesData();
  }, [fetchTopRatedMoviesData]);

  // console.log("de", upcomingMovies);
  // console.log("Movies-Data", upcomingMovies);

  return (
    <>
      <Cards
        moviesData={popularMovies}
        id={1}
        title="პოპულარული"
        sliceLastIndex="6"
        linkPath="/popular"
      />
      {Object.keys(topRatedMovies).length ? (
        <Cards
          id={2}
          moviesData={topRatedMovies}
          title="მაღალრეიტინგლი"
          sliceLastIndex="6"
          linkPath="/movies"
        />
      ) : (
        <Loader />
      )}

      {Object.keys(upcomingMovies).length ? (
        <Cards
          id={3}
          moviesData={upcomingMovies}
          title="პრემიერა"
          sliceLastIndex="12"
          linkPath="/trailers"
        />
      ) : (
        <Loader />
      )}

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

const mapDispatchToProps = (dispatch) => {
  // console.log("ACTION", fetchUpcomingMovies);
  return {
    fetchUpcomingMoviesData: () => dispatch(fetchUpcomingMovies()),
    fetchTopRatedMoviesData: () => dispatch(fetchTopRatedMovies()),
  };
};

const mapStateToProps = (state) => {
  // console.log("upcomingMoviesData", state.upcomingMovies.upcomingMovies);
  return {
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    topRatedMovies: state.topRatedMovies.topRatedMovies,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContentLayout);
