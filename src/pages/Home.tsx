import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBar setSearchTerm={ setSearchTerm } />
      {searchTerm ? (
        <ProductList
          searchTerm={ searchTerm }
          data-testid="product"
        />
      ) : (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </div>
  );
}

export default Home;
