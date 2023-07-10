import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { recoverLocalStorage } from '../services/cartManagement';
import { Product } from '../services/types';
import ProductCardCart from '../components/ProductCardCart';

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [quantityUpdate, setQuantityUpdate] = useState(true);

  useEffect(() => {
    const localStorage = recoverLocalStorage();
    setCartItems(localStorage);
  }, [quantityUpdate]);

  return (
    <div>
      <h1>Seu carrinho de compras</h1>
      {cartItems.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : (
        <ProductCardCart
          cartItems={ cartItems }
          setQuantityUpdate={ setQuantityUpdate }
          quantityUpdate={ quantityUpdate }
        />
      )}
      <Link to="/checkout" data-testid="checkout-products">
        Finalizar Compra
      </Link>
    </div>
  );
}

export default ShoppingCartPage;
