import React from "react";

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
