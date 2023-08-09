import React from "react";

interface CatImageProps {
  url: string;
}

export const CatImage: React.FC<CatImageProps> = ({ url }) => {
  return <img src={url} alt="Cat" className="cat-image" />;
};
