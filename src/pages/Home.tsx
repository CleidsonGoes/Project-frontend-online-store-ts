import { useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import ProductCardHome from '../components/ProductCardHome';
import { HomeProps } from '../services/types';

function Home({
  searchTerm,
  products = [],
  setProducts,
  loading = false,
  setLoading,
  refreshCartNumber,
}: HomeProps) {
  useEffect(() => {
    if (!searchTerm) {
      setProducts([]);
    }
  }, [searchTerm, setProducts]);

  return (
    <div>
      <CategoryList
        searchTerm={ searchTerm }
        setProductsState={ setProducts }
        setLoading={ setLoading }
      />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {products.length === 0 ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : (
            <ProductCardHome
              refreshCartNumber={ refreshCartNumber }
              products={ products }
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
