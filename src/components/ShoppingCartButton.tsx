import { Link } from 'react-router-dom';
import { ShoppingCartButtonProps } from '../services/types';

function ShoppingCartButton({ cartQuantity }: ShoppingCartButtonProps): JSX.Element {
  return (
    <Link to="/carrinho" data-testid="shopping-cart-button-layout">
      <button data-testid="shopping-cart-button">
        Carrinho de Compras
      </button>
      { cartQuantity > 0
        && (
          <span data-testid="shopping-cart-size">
            { cartQuantity }
          </span>)}
    </Link>
  );
}

export default ShoppingCartButton;
