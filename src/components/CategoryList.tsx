import { useEffect, useState } from 'react';
import * as api from '../services/api';

type CategoriesProps = {
  id: string;
  name: string;
};

interface CategoryListProps {
  searchTerm: string;
  setProductsState: (products: any) => void;
}

function CategoryList({ searchTerm, setProductsState }: CategoryListProps) {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [loading, setLoading] = useState(false);

  const getCategoryList = async () => {
    try {
      setLoading(true);
      const fetchApi = await api.getCategories();
      setCategories(fetchApi);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const filterCategoryList = async (id: string) => {
    try {
      setLoading(true);
      const response = await api.getProductsFromCategoryAndQuery(id, searchTerm);
      const fetchedProducts = response.results;
      setProductsState(fetchedProducts);
      setSelectedCategoryId(id);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        categories.map((category: CategoriesProps) => (
          <label htmlFor={ category.id } key={ category.id } data-testid="category">
            {category.name}
            <input
              type="radio"
              name="category"
              id={ category.id }
              onClick={ () => filterCategoryList(category.id) }
              checked={ category.id === selectedCategoryId }
            />
          </label>
        ))
      )}
    </div>
  );
}

export default CategoryList;
