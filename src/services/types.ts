export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantityInCart: number | undefined;
  shipping: {
    free_shipping: boolean;
  };
}

export interface HomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  refreshCartNumber: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LayoutProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartQuantity: number;
}

export interface ShoppingCartButtonProps {
  cartQuantity: number;
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CategoriesProps {
  id: string;
  name: string;
}

export interface CategoryListProps {
  searchTerm: string;
  setProductsState: (products: any) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
