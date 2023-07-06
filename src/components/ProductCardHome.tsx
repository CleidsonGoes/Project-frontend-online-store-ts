import { Link } from 'react-router-dom';
import { addCartItem } from '../services/cartManagement';

type ProductsCardHomeProps = {
  products: any[];
};

function ProductCardHome({ products }: ProductsCardHomeProps) {
  const handleAddToCart = (item: any) => {
    addCartItem(item);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={ product.id } data-testid="product">
          <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
            <div>
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{`R$ ${product.price}`}</p>
            </div>
          </Link>
          <button
            data-testid="product-add-to-cart"
            onClick={ () => handleAddToCart(product) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCardHome;
