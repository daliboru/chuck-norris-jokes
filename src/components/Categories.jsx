import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCategories } from "../api/getCategories";
import Search from "./Search";

export default function Categories() {
  const { data, error, isError, isLoading } = useQuery(
    "category",
    getCategories
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <h2 className="categoriesHeading">Choose a category!</h2>
      <div className="categoriesContainer">
        {data &&
          data.map((category, key) => (
            <Link key={key} to={`/${category}`} className="category">
              {category}
            </Link>
          ))}
      </div>
      <Search />
    </>
  );
}
