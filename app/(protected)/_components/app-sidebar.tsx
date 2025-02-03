"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/auth/user-button";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full p-4 bg-secondary z-50">
      <SidebarHeader>
        <div className="flex gap-2 py-2 text-sidebar-accent-foreground">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            {/* < className="size-4" /> */}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Company Name</span>
            <span className="truncate text-xs">Plan Name</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        <SidebarMenuItem className="my-2">
          <Link
            href="/dashboard"
            className={
              pathname === "/dashboard" ? "text-primary font-bold" : ""
            }
          >
            Dashboard
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/dashboard/server"
            className={
              pathname === "/dashboard/server" ? "text-primary font-bold" : ""
            }
          >
            Server
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/dashboard/client"
            className={
              pathname === "/dashboard/client" ? "text-primary font-bold" : ""
            }
          >
            Client
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/dashboard/admin"
            className={
              pathname === "/dashboard/admin" ? "text-primary font-bold" : ""
            }
          >
            Admin
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/dashboard/settings"
            className={
              pathname === "/dashboard/settings" ? "text-primary font-bold" : ""
            }
          >
            Settings
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/profile"
            className={pathname === "/profile" ? "text-primary font-bold" : ""}
          >
            Profile
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className="my-2">
          <Link
            href="/help"
            className={pathname === "/help" ? "text-primary font-bold" : ""}
          >
            Help
          </Link>
        </SidebarMenuItem>
      </SidebarContent>

      <SidebarFooter>
        <div className="absolute bottom-4 w-full">
          <UserButton />
        </div>
      </SidebarFooter>
    </aside>
  );
}
