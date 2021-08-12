import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUpcomingMovies } from "../../redux/actions/upcomingMoviesActions";
import { fetchTopRatedMovies } from "../../redux/actions/topRatedMoviesActions";
import { fetchNowPlayingMovies } from "../../redux/actions/nowPlayingMoviesActions";

import Loader from "../../UI/Loader";

import Cards from "../Cards/Cards";

const HomePageContentLayout = ({
  popularMovies,
  topRatedMovies,
  nowPlayingMovies,
  upcomingMovies,
  fetchUpcomingMoviesData,
  fetchTopRatedMoviesData,
  fetchNowPlayingMoviesData,
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

  useEffect(() => {
    fetchNowPlayingMoviesData();
  }, [fetchNowPlayingMoviesData]);

  // console.log("upcomingMovies", upcomingMovies);
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
      {Object.keys(nowPlayingMovies).length ? (
        <Cards
          id={4}
          moviesData={nowPlayingMovies}
          title="ახალი ფილმები"
          sliceLastIndex="12"
          linkPath="/series"
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  // console.log("ACTION", fetchUpcomingMovies);
  return {
    fetchUpcomingMoviesData: () => dispatch(fetchUpcomingMovies()),
    fetchTopRatedMoviesData: () => dispatch(fetchTopRatedMovies()),
    fetchNowPlayingMoviesData: () => dispatch(fetchNowPlayingMovies()),
  };
};

const mapStateToProps = (state) => {
  // console.log("upcomingMoviesData", state.upcomingMovies.upcomingMovies);
  return {
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    topRatedMovies: state.topRatedMovies.topRatedMovies,
    nowPlayingMovies: state.nowPlayingMovies.nowPlayingMovies,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContentLayout);
