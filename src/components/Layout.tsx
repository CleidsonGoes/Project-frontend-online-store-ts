import { NavLink, Outlet } from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <ShoppingCartButton />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
