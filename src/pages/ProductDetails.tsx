import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { addCartItem } from '../services/cartManagement';
import FormEvaluation from '../components/FormEvaluation';

interface Attribute {
  id: string;
  name: string;
  value_name: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  attributes: Attribute[];
}

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await getProductById(id);
          console.log(response);
          setProduct(response);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!product) {
    return <p>Nenhum produto encontrado</p>;
  }

  const handleAddToCart = (item: any) => {
    addCartItem(item);
  };

  return (
    <div>
      <h1 data-testid="product-detail-name">{product.title}</h1>
      <img
        src={ product.thumbnail }
        alt={ product.title }
        data-testid="product-detail-image"
      />
      <p data-testid="product-detail-price">
        {`Preço: R$ ${product.price}`}
      </p>
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => handleAddToCart(product) }
      >
        Adicionar ao Carrinho
      </button>
      <h2>Especificações técnicas:</h2>
      <ul>
        {product.attributes.map((attribute) => (
          <li key={ attribute.id }>
            <strong>
              {attribute.name}
            </strong>
            {attribute.value_name}
          </li>
        ))}
      </ul>
      <FormEvaluation />
    </div>
  );
}

export default ProductDetails;
