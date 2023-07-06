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
    const mapItems = cartItems.map((product: Product) => {
      if (product.quantityInCart === undefined) return { ...product, quantityInCart: 0 };
      return { ...product };
    });
    const newCartItems = [...mapItems, item];
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
    const refItem = cartItems.find((product: Product) => product.id === item.id);
    refItem.quantityInCart += 1;
    removeCartItem(refItem);
    addCartItem(refItem);
  } else if (sign === '-') {
    const refItem = cartItems.find((product: Product) => product.id === item.id);
    refItem.quantityInCart -= 1;
    removeCartItem(refItem);
    addCartItem(refItem);
  }
}
