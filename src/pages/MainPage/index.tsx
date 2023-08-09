import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCatsActions, RootState } from "@redux";
import { CategorySidebar, CatImage, LoadMoreButton } from "components";

import styles from "./MainPage.module.css";

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
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.wrapper}>
          <CategorySidebar categories={categories} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {categoryId ? (
            catImages.map((catImage) => (
              <CatImage key={catImage.id} url={catImage.url} />
            ))
          ) : (
            <h2 className={styles.title}>Category is not selected</h2>
          )}
        </div>
        <div>
          {catImages.length !== 0 && (
            <LoadMoreButton handleLoadMore={handleLoadMore} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
