import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCatsActions, RootState } from "@redux";
import { CategorySidebar, CatImage } from "components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchCategories } = useCatsActions();
  const { categories, catImages } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <CategorySidebar categories={categories} />
      {catImages.map((catImage) => (
        <CatImage key={catImage.id} url={catImage.url} />
      ))}
    </div>
  );
};

export default MainPage;
