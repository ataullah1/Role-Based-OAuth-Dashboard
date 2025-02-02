"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/auth/user-button";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-64 h-full p-4 bg-secondary">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <Separator className="my-2" />
      <SidebarMenuItem className="my-2">
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? "text-primary font-bold" : ""}
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
      <div className="absolute bottom-4 w-full">
        <UserButton />
      </div>
    </aside>
  );
}
