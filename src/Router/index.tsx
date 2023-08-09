import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("pages/MainPage"));

export const Router = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};
