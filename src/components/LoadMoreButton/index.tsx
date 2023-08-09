import React from "react";
import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  handleLoadMore: () => void;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  handleLoadMore,
}) => {
  return (
    <button onClick={handleLoadMore} className={styles.loadMoreButton}>
      Load More
    </button>
  );
};
