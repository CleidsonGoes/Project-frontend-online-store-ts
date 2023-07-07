import { removeCartItem, cartQuantityManagement } from '../services/cartManagement';
import { Product } from '../services/types';
import FreeShipping from './FreeShipping';

type ProductCardCartProps = {
  cartItems: Product[];
  setQuantityUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  quantityUpdate: boolean;
  refreshCartNumber: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductCardCart({
  cartItems, setQuantityUpdate, quantityUpdate, refreshCartNumber,
}: ProductCardCartProps) {
  return (
    <ul>
      {cartItems.map((item: Product) => (
        <li key={ item.id }>
          <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
          <img src={ item.thumbnail } alt={ item.title } />
          <p>{`R$ ${item.price}`}</p>
          <p data-testid="shopping-cart-product-quantity">
            {`Quantidade: ${item.quantityInCart ? item.quantityInCart : 1}`}
          </p>
          { item.shipping.free_shipping && <FreeShipping /> }
          <button
            data-testid="remove-product"
            onClick={ () => {
              removeCartItem(item);
              setQuantityUpdate(!quantityUpdate);
              refreshCartNumber((prev) => !prev);
            } }
          >
            Remover do carrinho
          </button>
          <button
            data-testid="product-increase-quantity"
            onClick={ () => {
              cartQuantityManagement('+', item);
              setQuantityUpdate(!quantityUpdate);
              refreshCartNumber((prev) => !prev);
            } }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            onClick={ () => {
              cartQuantityManagement('-', item);
              setQuantityUpdate(!quantityUpdate);
              refreshCartNumber((prev) => !prev);
            } }
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductCardCart;
