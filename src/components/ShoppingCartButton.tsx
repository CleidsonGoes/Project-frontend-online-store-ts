import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCartButton(): JSX.Element {
  return (
    <Link to="/carrinho" data-testid="shopping-cart-button-layout">
      <button data-testid="shopping-cart-button">Carrinho de compras</button>
    </Link>
  );
}

export default ShoppingCartButton;
