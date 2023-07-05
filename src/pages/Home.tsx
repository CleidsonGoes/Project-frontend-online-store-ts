import { useState } from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBar setSearchTerm={ setSearchTerm } />
      {searchTerm ? (
        <p>Lista de produtos</p>
      ) : (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </div>
  );
}

export default Home;
