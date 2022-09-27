import React, { useState } from "react";
import { useQuery } from "react-query";
import { getJokesSearch } from "../api/getJokesSearch";
import { useDebounce } from "../hooks/useDebouncer";

export default function Search() {
  const [query, setQuery] = useState();
  const debouncedFilter = useDebounce(query, 500);
  const { data, error, isError, isLoading } = useQuery(
    ["jokes", debouncedFilter],
    () => getJokesSearch(debouncedFilter),
    { enabled: Boolean(debouncedFilter) }
  );

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setQuery(lowerCase);
  };

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <h2>Search jokes</h2>
      <div className="search">
        <input type="text" label="Search" onChange={inputHandler} />
      </div>
      <div>
        {isLoading && <li>Loading...</li>}
        {data &&
          data.result &&
          data.result
            .slice(0, 9)
            .map((item, key) => <li key={item.id}>{item.value}</li>)}
      </div>
    </>
  );
}
