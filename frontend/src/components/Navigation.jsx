import { Edit, Palette, Download, Server, UserCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items for ParceUrFolio
const items = [
  {
    title: "Get Started",
    url: "/",
    icon: UserCircle,
  },
  {
    title: "Select Template",
    url: "/select-template",
    icon: Edit,
  },
  {
    title: "Choose Theme",
    url: "/themes",
    icon: Palette,
  },
  {
    title: "Download Portfolio",
    url: "/download",
    icon: Download,
  },
  {
    title: "Host Portfolio",
    url: "/host",
    icon: Server,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ParceUrFolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
