/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { recoverLocalStorage } from '../services/cartManagement';
import ProductCardCart from '../components/ProductCardCart';
import { Product } from '../services/types';

interface ShoppingCartPageProps {
  refreshCartNumber: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShoppingCartPage({ refreshCartNumber }: ShoppingCartPageProps) {
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
          refreshCartNumber={ refreshCartNumber }
          cartItems={ cartItems }
          setQuantityUpdate={ setQuantityUpdate }
          quantityUpdate={ quantityUpdate }
        />
      )}
    </div>
  );
}

export default ShoppingCartPage;
