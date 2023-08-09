export interface Category {
  id: number;
  name: string;
}

export interface CatImage {
  id: string;
  url: string;
}

export interface RootState {
  cats: {
    categories: Category[];
    catImages: CatImage[];
    categoryId: number;
  };
}

export type Cats = RootState["cats"];

export interface Action {
  type: string;
  payload?: any;
}
