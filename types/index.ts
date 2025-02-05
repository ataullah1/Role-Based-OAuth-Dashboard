import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  url?: string;
  icon?: keyof typeof Icons;
  shortcut?: string[];
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    shortcut?: string[];
  }[];
}
