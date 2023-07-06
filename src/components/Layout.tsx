import { NavLink, Outlet } from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';
import SearchBar from './SearchBar';
import { AppMasterProps } from '../services/types';

function Layout({
  searchTerm,
  setSearchTerm,
  setLoading,
  setProducts,
}: AppMasterProps) {
  return (
    <div>
      <header>
        <SearchBar
          searchTerm={ searchTerm }
          setSearchTerm={ setSearchTerm }
          setLoading={ setLoading }
          setProducts={ setProducts }
        />
        <nav>
          <NavLink to="/">Home</NavLink>
          <ShoppingCartButton />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
