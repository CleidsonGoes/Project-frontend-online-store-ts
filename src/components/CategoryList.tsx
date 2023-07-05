import { useEffect, useState } from 'react';
import * as api from '../services/api';

type CategoriesProps = {
  id: string;
  name: string;
};

function CategoryList() {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  const getCategoryList = async () => {
    const fetchApi = await api.getCategories();
    setCategories(fetchApi);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      { categories.map((category: CategoriesProps) => {
        return (
          <label htmlFor={ category.id } key={ category.id } data-testid="category">
            { category.name }
            <input type="radio" name="category" id={ category.id } />
          </label>
        );
      })}
    </div>
  );
}

export default CategoryList;
