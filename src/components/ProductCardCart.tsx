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
            {`Quantidade: ${item.quantityInCart ? item.quantityInCart : 1}`}
          </p>
          <button
            data-testid="remove-product"
            onClick={ () => {
              removeCartItem(item);
              setQuantityUpdate(!quantityUpdate);
            } }
          >
            Remover do carrinho
          </button>
          <button
            data-testid="product-increase-quantity"
            onClick={ () => {
              cartQuantityManagement('+', item);
              setQuantityUpdate(!quantityUpdate);
            } }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
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
