import React, { useEffect, useState } from "react";
import axios from "axios";

import { Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SignleMoviePage from "./pages/SignleMoviePage";
import SeriesPage from "./pages/SeriesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import RegistrationPage from "./pages/RegistrationPage";
import TrailersPage from "./pages/TrailersPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const API_key = "a7800c107865c419bc37a1f55d4993ae";

// const poster_URL = "https://image.tmdb.org/t/p/original/";

const popularMovies_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}`;
const nowplayingMovies_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_key}`;

function App() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [nowplayingMovies, setNowplayingMovies] = useState(null);
  const [popularPageMoviesData, setPopularPageMoviesData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPopularMoviesData = async () => {
      await axios
        .get(popularMovies_URL)
        .then((response) => {
          // console.log("popularMoviesData", response.data);
          setPopularMovies(response.data);
          setPopularPageMoviesData(response.data);
        })
        .catch((error) => setError(error));
    };

    getPopularMoviesData();
  }, []);

  useEffect(() => {
    const getNowplayingData = async () => {
      await axios
        .get(nowplayingMovies_URL)
        .then((response) => {
          // console.log("nowPlayingMoviesData", response.data);
          setNowplayingMovies(response.data);
        })
        .catch((error) => setError(error));
    };
    getNowplayingData();
  }, []);

  if (error) return `ERROR: ${error.message}`;

  if (!popularMovies || !nowplayingMovies) return null;

  return (
    <div className="App">
      <Header API_key={API_key} setError={setError} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <HomePage
            popularMovies={popularMovies}
            nowplayingMovies={nowplayingMovies}
          />
        </Route>

        <Route path="/trailers">
          <TrailersPage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <SignleMoviePage API_key={API_key} setError={setError} />
        </Route>

        <Route path="/series">
          <SeriesPage />
        </Route>

        <Route path="/popular">
          <PopularMoviesPage popularPageMoviesData={popularPageMoviesData} />
        </Route>

        <Route path="/registration">
          <RegistrationPage />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
