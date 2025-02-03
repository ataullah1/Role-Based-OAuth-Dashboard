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
    title: "Server",
    url: "/dashboard/server",
    icon: "server",
    shortcut: ["m", "m"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Client",
    shortcut: ["p", "p"],
    url: "/dashboard/client",
    icon: "Boxes",
  },
  {
    title: "Admin",
    url: "/dashboard/admin",
    icon: "kanban",
    shortcut: ["k", "k"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
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
