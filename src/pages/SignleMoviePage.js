import React from "react";

import { useParams } from "react-router-dom";

import SingleMoviePageLayout from "../components/Layout/SignleMoviePageLayout";

const SignleMoviePage = () => {
  const params = useParams();
  // console.log("params", params);
  return (
    <SingleMoviePageLayout>
      <span>{params.movieId}</span>
    </SingleMoviePageLayout>
  );
};

export default SignleMoviePage;
