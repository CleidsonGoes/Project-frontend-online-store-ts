import { removeCartItem, cartQuantityManagement } from '../services/cartManagement';
import { Product } from '../services/types';

type ProductCardCartProps = {
  cartItems: Product[];
  setQuantityUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  quantityUpdate: boolean;
};

function ProductCardCart({
  cartItems, setQuantityUpdate, quantityUpdate }: ProductCardCartProps) {
  return (
    <ul>
      {cartItems.map((item: Product) => (
        <li key={ item.id }>
          <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
          <img src={ item.thumbnail } alt={ item.title } />
          <p>{`R$ ${item.price}`}</p>
          <p data-testid="shopping-cart-product-quantity">
            {`Quantidade: ${item.quantityInCart}`}
          </p>
          <button
            data-testid="product-remove-from-cart"
            onClick={ () => {
              removeCartItem(item);
              setQuantityUpdate(!quantityUpdate);
            } }
          >
            Remover do carrinho
          </button>
          <button
            onClick={ () => {
              cartQuantityManagement('+', item);
              setQuantityUpdate(!quantityUpdate);
            } }
          >
            +
          </button>
          <button
            onClick={ () => {
              cartQuantityManagement('-', item);
              setQuantityUpdate(!quantityUpdate);
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
