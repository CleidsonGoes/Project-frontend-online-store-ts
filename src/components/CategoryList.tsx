import { useEffect, useState } from 'react';
import * as api from '../services/api';
import { CategoriesProps, CategoryListProps } from '../services/types';

function CategoryList({ searchTerm, setProductsState, setLoading }: CategoryListProps) {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const getCategoryList = async () => {
    const fetchApi = await api.getCategories();
    setCategories(fetchApi);
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
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCategoryChange = (id: string) => {
    setSelectedCategoryId(id);
    filterCategoryList(id);
  };

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category: CategoriesProps) => (
        <label htmlFor={ category.id } key={ category.id } data-testid="category">
          <input
            type="radio"
            name="category"
            id={ category.id }
            checked={ category.id === selectedCategoryId }
            onChange={ () => handleCategoryChange(category.id) }
          />
          {category.name}
        </label>
      ))}
    </div>
  );
}

export default CategoryList;
