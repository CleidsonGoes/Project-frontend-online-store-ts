import { NavLink, Outlet } from 'react-router-dom';

import ShoppingCartButton from './ShoppingCartButton';
import SearchBar from './SearchBar';

import { LayoutProps } from '../services/types';

function Layout({
  searchTerm,
  setSearchTerm,
  setLoading,
  setProducts,
  cartQuantity,
}: LayoutProps) {
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
          <ShoppingCartButton cartQuantity={ cartQuantity } />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
