import { Link } from 'react-router-dom';
import { addCartItem } from '../services/cartManagement';
import { Product } from '../services/types';
import FreeShipping from './FreeShipping';

type ProductsCardHomeProps = {
  products: Product[];
  refreshCartNumber: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductCardHome({ products, refreshCartNumber }: ProductsCardHomeProps) {
  const handleAddToCart = (item: any) => {
    addCartItem(item);
    refreshCartNumber((prev) => !prev);
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
          { product.shipping.free_shipping && <FreeShipping /> }
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
