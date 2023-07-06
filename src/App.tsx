import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';
import { Product } from './services/types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

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
            />
          }
        >
          <Route
            index
            element={
              <Home
                searchTerm={ searchTerm }
                setSearchTerm={ setSearchTerm }
                products={ products }
                setProducts={ setProducts }
                loading={ loading }
                setLoading={ setLoading }
              />
            }
          />
          <Route path="carrinho" element={ <ShoppingCartPage /> } />
          <Route path="product/:id" element={ <ProductDetails /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
