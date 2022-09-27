async function getCategories() {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  return await res.json();
}

export { getCategories };
