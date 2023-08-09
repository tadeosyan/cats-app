import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, useCatsActions, RootState } from "@redux";
import styles from "./CategorySidebar.module.css";

interface CategorySidebarProps {
  categories: Category[];
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
}) => {
  const dispatch = useDispatch();
  const { setCategoryId, fetchCatImages } = useCatsActions();
  const selectedCategoryId = useSelector(
    (state: RootState) => state.cats.categoryId
  );

  const handleCategoryClick = (categoryId: number) => {
    dispatch(setCategoryId(categoryId));
    dispatch(fetchCatImages(categoryId));
  };

  return (
    <div className={styles.menu}>
      <h2>Categories</h2>
      <ul className={styles.menuList}>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={
              category.id === selectedCategoryId
                ? styles.active
                : styles.voiceMenu
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
