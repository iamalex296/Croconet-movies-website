import React, { useState } from "react";

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

function App() {
  const [error, setError] = useState(false);

  if (error) return `ERROR: ${error.message}`;

  return (
    <div className="App">
      <Header API_key={process.env.REACT_APP_API_KEY} setError={setError} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <HomePage />
        </Route>

        <Route path="/trailers">
          <TrailersPage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <SignleMoviePage
            API_key={process.env.REACT_APP_API_KEY}
            setError={setError}
          />
        </Route>

        <Route path="/series">
          <SeriesPage />
        </Route>

        <Route path="/popular">
          <PopularMoviesPage />
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
