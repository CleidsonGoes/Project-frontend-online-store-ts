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

export async function getProductById() {
  const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const fetchData = await fetchApi.json();

  return fetchData;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
