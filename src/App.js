import React from "react";

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import RegistrationPage from "./pages/RegistrationPage";

import Header from "./components/Header/Header";

import "./App.css";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
