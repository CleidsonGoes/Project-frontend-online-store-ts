import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

function Layout() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <main>
        <SearchBar setSearchTerm={ setSearchTerm } />
        {searchTerm ? (
          <p>Lista de produtos</p>
        ) : (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </main>
    </div>
  );
}

export default Layout;
