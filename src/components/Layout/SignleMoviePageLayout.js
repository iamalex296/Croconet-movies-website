import React from "react";

import Template from "../Templates/Template";
// import classes from "./SingleMoviePageLayout.module.css";

const poster_URL = "https://image.tmdb.org/t/p/original";

const SignleMoviePageLayout = ({
  singleMovieDetailsObj,
  movieVideo,
  isLoading,
}) => {
  // console.log("singleMovieDetails", singleMovieDetailsObj);
  // console.log("video", movieVideo);
  // console.log("isLoading", isLoading);

  return (
    <Template
      style={{
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        margin: "0",
        marginBottom: "20px",
      }}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
              padding: "0px 30px",
              backgroundImage:
                "url(" +
                poster_URL +
                `${
                  singleMovieDetailsObj && singleMovieDetailsObj.backdrop_path
                }` +
                ")",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                heigth: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              {movieVideo}
            </div>
          </div>

          <div
            style={{
              width: "70%",
              height: "90%",
              display: "flex",
              marginTop: "50px",
            }}
          >
            <img
              style={{ height: "100%", width: "30%", borderRadius: "5px" }}
              src={
                poster_URL +
                `${
                  singleMovieDetailsObj.poster_path &&
                  singleMovieDetailsObj.poster_path
                }`
              }
              alt="moviePoster"
            />
            <div
              style={{
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                background: "#1b1e20",
                alignItems: "stretch",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <p>
                {singleMovieDetailsObj.title && singleMovieDetailsObj.title}
              </p>
              <p>
                ენა:{" "}
                {singleMovieDetailsObj.original_language &&
                  singleMovieDetailsObj.original_language.toUpperCase()}
              </p>
              <p>
                გამოშვების წელი:{" "}
                {singleMovieDetailsObj.release_date &&
                  singleMovieDetailsObj.release_date.slice(0, 4)}
              </p>
              <p>
                ხანგრძლივობა:{" "}
                {singleMovieDetailsObj.runtime && singleMovieDetailsObj.runtime}{" "}
                წუთი{" "}
              </p>
              <p>
                შემოსავალი:{" "}
                {singleMovieDetailsObj.revenue && singleMovieDetailsObj.revenue}
                $
              </p>
              <p>
                აღწერა:{" "}
                {singleMovieDetailsObj.overview &&
                  singleMovieDetailsObj.overview}
              </p>
            </div>
          </div>
        </>
      )}
    </Template>
  );
};

export default SignleMoviePageLayout;
