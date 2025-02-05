import PageContainer from "@/app/(protected)/_components/page-container";
import React from "react";
import AddNewsForm from "../_components/AddNewsForm";
import { getEnabledCategories } from "../../categories/categories-action";

export const metadata = {
  title: "Dashboard : Post News",
};

export default async function PostNewsPage() {
  const categories = await getEnabledCategories();

  return (
    <div>
      <PageContainer>
        <AddNewsForm categories={categories} />
      </PageContainer>
    </div>
  );
}
