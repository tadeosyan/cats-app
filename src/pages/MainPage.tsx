import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCatsActions, RootState } from "@redux";
import { CategorySidebar } from "components/CategorySidebar";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchCategories } = useCatsActions();
  const { categories } = useSelector((state: RootState) => state.cats);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <CategorySidebar categories={categories} />
    </div>
  );
};

export default MainPage;
