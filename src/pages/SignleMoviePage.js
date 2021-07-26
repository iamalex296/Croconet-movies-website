import React from "react";

import SingleMoviePageLayout from "../components/Layout/SignleMoviePageLayout";

const SignleMoviePage = ({ API_key, setError }) => {
  return <SingleMoviePageLayout setError={setError} API_key={API_key} />;
};

export default SignleMoviePage;
