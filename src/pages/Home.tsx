import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await getProductsFromCategoryAndQuery('', searchTerm);
      const fetchedProducts = response.results;
      setProducts(fetchedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!searchTerm) {
      setProducts([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <CategoryList setProductsState={ setProducts }/>
      <form onSubmit={ handleSearch }>
        <input
          data-testid="query-input"
          type="text"
          placeholder="Digite o termo de pesquisa"
          value={ searchTerm }
          onChange={ handleInputChange }
        />
        <button type="submit" data-testid="query-button">
          Buscar
        </button>
      </form>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {products.length === 0 && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          {products.length > 0 && (
            <div>
              {products.map((product) => (
                <div key={ product.id } data-testid="product">
                  <h3 data-testid="product">{product.title}</h3>
                  <img
                    src={ product.thumbnail }
                    alt={ product.title }
                    data-testid="product"
                  />
                  <p data-testid="product">{`R$ ${product.price}`}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
