/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { recoverLocalStorage, removeCartItem } from '../services/cartManagement';
import { Product } from '../services/types';

function ShoppingCartPage() {
  const cartItems = recoverLocalStorage();
  const [count, setCount] = useState(1);

  const handleRemoveItem = (item: Product) => {
    removeCartItem(item);
  };

  const handleAddQuantity = (item: Product) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRemoveQuantity = (item: Product) => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>Seu carrinho de compras</h1>
      {cartItems.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : (
        <ul>
          {cartItems.map((item: Product) => (
            <li key={ item.id }>
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$ ${item.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">
                {`Quantidade: ${count}`}
              </p>
              <button
                data-testid="product-remove-from-cart"
                onClick={ () => handleRemoveItem(item) }
              >
                Remover do carrinho
              </button>
              <button onClick={ () => handleAddQuantity(item) }>+</button>
              <button onClick={ () => handleRemoveQuantity(item) }>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCartPage;
