import { Suspense } from "react";
import { LoadingPage } from "@/components/loading";
import CategoriesListPage from "./_components/categories-ui/all-categories-page";

const CategoriesPage = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <CategoriesListPage />
      </Suspense>
    </div>
  );
};

export default CategoriesPage;
