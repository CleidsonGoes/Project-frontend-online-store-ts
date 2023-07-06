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
  if (cartItems.some((product: Product) => product.id === item.id)) {
    changeLocalStorage(cartItems);
  } else {
    const newItem = item;
    item.quantityInCart = 1;
    const newCartItems = [...cartItems, newItem];
    changeLocalStorage(newCartItems);
  }
}

// FUNÇÃO PARA REMOVER ITEM DO CARRRINHO DE COMPRAS
export function removeCartItem(item: Product) {
  const cartItems = recoverLocalStorage();
  const newCartItems = cartItems.filter((product: Product) => product.id !== item.id);
  changeLocalStorage(newCartItems);
}

// FUNÇÃO PARA LIMPAR O CARRRINHO DE COMPRAS
export function clearCartItems() {
  localStorage.removeItem('cartItems');
}

// FUNÇÃO PARA AUMENTAR/DIMINUIR A QUANTIDADE DO ITEM
export function cartQuantityManagement(sign: string, item: Product) {
  const cartItems = recoverLocalStorage();

  if (sign === '+') {
    const refItem = cartItems.findIndex((product: Product) => product.id === item.id);
    if (cartItems[refItem].quantityInCart === cartItems[refItem].available_quantity) {
      changeLocalStorage(cartItems);
    } else {
      cartItems[refItem].quantityInCart += 1;
      changeLocalStorage(cartItems);
    }
  } else if (sign === '-') {
    const refItem = cartItems.findIndex((product: Product) => product.id === item.id);
    if (cartItems[refItem].quantityInCart === 1) {
      changeLocalStorage(cartItems);
    } else {
      cartItems[refItem].quantityInCart -= 1;
      changeLocalStorage(cartItems);
    }
  }
}
