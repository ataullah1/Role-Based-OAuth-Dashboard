import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },

  {
    title: "Members",
    url: "/dashboard/members",
    icon: "user",
    shortcut: ["m", "m"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Panel Management",
    shortcut: ["p", "p"],
    url: "/dashboard/panel-management",
    icon: "Boxes",
  },
  {
    title: "Notice Board",
    url: "/dashboard/notice",
    icon: "kanban",
    shortcut: ["k", "k"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Audit Logs",
    url: "/dashboard/audit-logs",
    icon: "Logs",
    shortcut: ["r", "r"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Roles",
    url: "/dashboard/roles",
    icon: "shield",
    shortcut: ["r", "r"],
    isActive: false,
    items: [], // No child items
  },
];
