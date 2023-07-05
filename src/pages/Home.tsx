import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <CategoryList />
      <SearchBar setSearchTerm={ setSearchTerm } />
      {searchTerm ? (
        <p>Você ainda não realizou uma busca</p>
      ) : (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      )}
    </div>
  );
}

export default Home;
