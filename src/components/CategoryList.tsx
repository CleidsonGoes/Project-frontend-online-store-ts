import { useEffect, useState } from 'react';
import * as api from '../services/api';

type CategoriesProps = {
  id: string;
  name: string;
};

function CategoryList({setProductsState}) {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  const getCategoryList = async () => {
    const fetchApi = await api.getCategories();
    setCategories(fetchApi);
  };
  const filterCategoryList = async (id:string) => {
    const fetchApi = await api.itemCategoryId(id);
    setProductsState([fetchApi]);
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
            <input
              type="radio"
              name="category"
              id={ category.id }
              onClick={ () => filterCategoryList(category.id) }
            />
          </label>
        );
      })}
    </div>
  );
}

export default CategoryList;
