import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
