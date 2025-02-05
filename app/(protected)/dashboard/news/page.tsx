import React, { Suspense } from "react";
import { LoadingPage } from "@/components/loading";
import NewsListPage from "./_components/news-ui/all-news-page";

const page = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <NewsListPage />
      </Suspense>
    </div>
  );
};

export default page;
