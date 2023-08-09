import React from "react";

interface LoadMoreButtonProps {
  handleLoadMore: () => void;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  handleLoadMore,
}) => {
  return <button onClick={handleLoadMore}>Load More</button>;
};
