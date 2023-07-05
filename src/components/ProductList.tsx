import { useEffect, useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductListProps {
  searchTerm: string;
}

function ProductList({ searchTerm }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
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

    if (searchTerm) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {products.length === 0 && (
            <p>Nenhum produto foi encontrado</p>
          )}
          {products.length > 0 && (
            <div>
              {products.map((product) => (
                <div
                  key={ product.id }
                  data-testid="product"
                >
                  <h3 data-testid="product">{product.title}</h3>
                  <img
                    src={ product.thumbnail }
                    alt={ product.title }
                    data-testid="product"
                  />
                  <p data-testid="product">
                    {`R$ ${product.price}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default ProductList;
