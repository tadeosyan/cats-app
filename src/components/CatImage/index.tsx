import React from "react";
import styles from "./CatImage.module.css";

interface CatImageProps {
  url: string;
}

export const CatImage: React.FC<CatImageProps> = ({ url }) => {
  return (
    <div>
      <img src={url} alt="Cat" className={styles.catImage} />
    </div>
  );
};
