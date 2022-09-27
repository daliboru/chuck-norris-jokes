async function getRandomJoke(category) {
  const res = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  return await res.json();
}

export { getRandomJoke };
