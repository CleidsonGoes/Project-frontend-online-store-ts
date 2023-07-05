export async function getCategories() {
  const fetchApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const fetchData = await fetchApi.json();

  return fetchData;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const fetchData = await fetchApi.json();

  return fetchData;
}

export async function getProductById(productId: string) {
  const fetchApi = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const fetchData = await fetchApi.json();

  return fetchData;
}
