import { EyeOff, Eye } from "lucide-react";

export const statuses = [
  {
    value: "PRIVATE",
    label: "Private",
    iconName: "eyeOff",
  },
  {
    value: "PUBLISHED",
    label: "Published",
    iconName: "eye",
  },
];

export const getCategoryOptions = (categories: any[]) => {
  return categories
    .filter((category) => category.status === "PUBLISHED")
    .map((category) => ({
      label: category.name,
      value: category.name,
    }));
};
