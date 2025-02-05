import { Separator } from "@/components/ui/separator";
import PageContainer from "@/app/(protected)/_components/page-container";
import { Heading } from "@/components/heading";
import { getAllCategories } from "../../categories-action";
import { DataTable } from "../../../../_components/table/data-table";
import { columns } from "./columns";
import { categoryStatuses } from "./data/data";

export default async function CategoriesListPage() {
  const categories = await getAllCategories();
  const totalCategories = categories.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Categories (${totalCategories})`}
            description="Manage news categories"
          />
        </div>
        <Separator />
        <div className="h-full flex-1 flex-col space-y-8 flex">
          <DataTable
            data={categories}
            columns={columns}
            searchKey="name"
            filterKey="status"
            filterOptions={categoryStatuses}
          />
        </div>
      </div>
    </PageContainer>
  );
}
