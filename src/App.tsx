import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';
import { Product } from './services/types';
import { recoverCartQuantity } from './services/cartManagement';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [refreshCart, setRefreshCart] = useState(true);

  useEffect(() => {
    const localStorage = recoverCartQuantity();
    setCartQuantity(localStorage);
  }, [refreshCart]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              searchTerm={ searchTerm }
              setSearchTerm={ setSearchTerm }
              setLoading={ setLoading }
              setProducts={ setProducts }
              cartQuantity={ cartQuantity }
            />
          }
        >
          <Route
            index
            element={
              <Home
                refreshCartNumber={ setRefreshCart }
                searchTerm={ searchTerm }
                setSearchTerm={ setSearchTerm }
                products={ products }
                setProducts={ setProducts }
                loading={ loading }
                setLoading={ setLoading }
              />
            }
          />
          <Route
            path="carrinho"
            element={ <ShoppingCartPage refreshCartNumber={ setRefreshCart } /> }
          />
          <Route
            path="product/:id"
            element={ <ProductDetails refreshCartNumber={ setRefreshCart } /> }
          />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
