import { Product } from './types';

export function recoverLocalStorage() {
  const recoverLocal = localStorage.getItem('cartItems');

  if (recoverLocal) {
    const cartItems = JSON.parse(recoverLocal);
    return cartItems;
  }

  return [];
}

export function changeLocalStorage(cartArray: Product[]) {
  localStorage.setItem('cartItems', JSON.stringify(cartArray));
}

// FUNÇÃO PARA ADICIONAR ITEM AO CARRRINHO DE COMPRAS
export function addCartItem(item: Product) {
  const cartItems = recoverLocalStorage();
  const newCartItems = [...cartItems, item];
  changeLocalStorage(newCartItems);
}

// FUNÇÃO PARA REMOVER ITEM DO CARRRINHO DE COMPRAS
export function removeCartItem(item: Product) {
  const cartItems = recoverLocalStorage();
  const newCartItems = cartItems.filter((product: Product) => product.id === item.id);
  changeLocalStorage(newCartItems);
}

// FUNÇÃO PARA LIMPAR O CARRRINHO DE COMPRAS
export function clearCartItems() {
  localStorage.removeItem('cartItems');
}
