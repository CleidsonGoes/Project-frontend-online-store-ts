export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface AppMasterProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  products?: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  loading?: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
