"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { statuses } from "../../dashboard/news/_components/news-ui/data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchKey: string;
  filterKey?: string;
  filterOptions?: {
    label: string;
    value: string;
    iconName: string;
  }[];
  categoryOptions?: { label: string; value: string }[];
}

export function DataTableToolbar<TData>({
  table,
  searchKey,
  filterKey,
  filterOptions,
  categoryOptions,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`Search ${searchKey}...`}
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* Status Filter for News */}
        {table.getColumn("status") && !filterOptions && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {/* Status Filter for Categories */}
        {filterKey && filterOptions && table.getColumn(filterKey) && (
          <DataTableFacetedFilter
            column={table.getColumn(filterKey)}
            title="Status"
            options={filterOptions}
          />
        )}
        {/* Category Filter for News */}
        {table.getColumn("category") && categoryOptions && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={categoryOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
