import PageContainer from "@/app/(protected)/_components/page-container";
import AddCategoryForm from "../_components/AddCategoryForm";

export const metadata = {
  title: "Dashboard : Add Category",
};

const AddCategoryPage = () => {
  return (
    <div>
      <PageContainer>
        <AddCategoryForm />
      </PageContainer>
    </div>
  );
};

export default AddCategoryPage;
