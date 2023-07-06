import { FormEvent, ChangeEvent } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { AppMasterProps } from '../services/types';

function SearchBar({
  searchTerm,
  setSearchTerm,
  setLoading,
  setProducts,
}: AppMasterProps) {
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await getProductsFromCategoryAndQuery('', searchTerm);
      const fetchedProducts = response.results;
      setProducts(fetchedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={ handleSearch }>
      <input
        data-testid="query-input"
        type="text"
        placeholder="Digite o termo de pesquisa"
        value={ searchTerm }
        onChange={ handleInputChange }
      />
      <button type="submit" data-testid="query-button">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
