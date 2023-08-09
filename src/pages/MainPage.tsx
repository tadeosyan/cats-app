import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCatsActions, RootState } from "@redux";
import { CategorySidebar, CatImage } from "components";
import { LoadMoreButton } from "components/LoadMoreButton";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchCategories, loadMoreCatImages } = useCatsActions();
  const { categories, catImages, categoryId } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCatImages(categoryId));
  };

  return (
    <div>
      <CategorySidebar categories={categories} />
      {catImages.map((catImage) => (
        <CatImage key={catImage.id} url={catImage.url} />
      ))}
      <LoadMoreButton handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default MainPage;
