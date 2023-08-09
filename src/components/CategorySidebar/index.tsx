import React from "react";
import { Category } from "@redux";

interface CategorySidebarProps {
  categories: Category[];
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
}) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};
