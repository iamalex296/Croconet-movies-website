import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import RegistrationPage from "./pages/RegistrationPage";
import TrailersPage from "./pages/TrailersPage";

import Header from "./components/Header/Header";

import "./App.css";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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

          <Route path="/movies">
            <MoviesPage />
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
