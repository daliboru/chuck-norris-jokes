import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getRandomJoke } from "../api/getRandomJoke";

export default function RandomJoke() {
  const { jokeCategory } = useParams();
  const {
    data: joke,
    error,
    isError,
    isLoading,
  } = useQuery("joke", () => getRandomJoke(jokeCategory));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      {joke && (
        <div className="jokeContainer">
          <h1>{joke.value}</h1>
          <Link to={"/"}>Back</Link>
        </div>
      )}
    </>
  );
}
