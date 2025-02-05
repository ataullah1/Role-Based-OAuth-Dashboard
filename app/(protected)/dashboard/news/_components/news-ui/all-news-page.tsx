import { Separator } from "@/components/ui/separator";
import PageContainer from "@/app/(protected)/_components/page-container";
import { Heading } from "@/components/heading";
import { getAllNews } from "../../news-action";
import { DataTable } from "../../../../_components/table/data-table";
import { columns } from "./columns";
import { getEnabledCategories } from "../../../categories/categories-action";
import { getCategoryOptions } from "./data/data";
import { statuses } from "./data/data";

export default async function NewsListPage() {
  const [allNews, categories] = await Promise.all([
    getAllNews(),
    getEnabledCategories(),
  ]);

  const categoryOptions = getCategoryOptions(categories);
  const totalNews = allNews.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Total News (${totalNews})`}
            description="View all news"
          />
        </div>
        <Separator />
        <div className="h-full flex-1 flex-col space-y-8 flex">
          <DataTable
            data={allNews}
            columns={columns}
            searchKey="title"
            filterKey="status"
            filterOptions={statuses}
            categoryOptions={categoryOptions}
          />
        </div>
      </div>
    </PageContainer>
  );
}
