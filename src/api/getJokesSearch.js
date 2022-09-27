async function getJokesSearch(query) {
  const res = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );
  return await res.json();
}

export { getJokesSearch };
