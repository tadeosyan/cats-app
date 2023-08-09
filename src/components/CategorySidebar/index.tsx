import React from "react";
import { Category, useCatsActions } from "@redux";
import { useDispatch } from "react-redux";

interface CategorySidebarProps {
  categories: Category[];
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
}) => {
  const dispatch = useDispatch();
  const { setCategoryId, fetchCatImages } = useCatsActions();

  const handleCategoryClick = (categoryId: number) => {
    dispatch(setCategoryId(categoryId));
    dispatch(fetchCatImages(categoryId));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
