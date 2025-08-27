import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { 
  Home, 
  FolderOpen, 
  Video, 
  Puzzle, 
  Settings,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "File System", url: "/file-system", icon: FolderOpen },
  { title: "In-Person System", url: "/in-person-system", icon: Video },
  { title: "Extension", url: "/extension", icon: Puzzle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 border-r border-sidebar-border bg-sidebar`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          {!collapsed && (
            <div className="gradient-text text-xl font-bold">GO-X</div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-brand text-white shadow-glow"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-0"}`} />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gradient-brand text-white text-sm">
              EDJ
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Edwin Joel P
              </p>
              <p className="text-xs text-sidebar-foreground/70 truncate">
                edwin810joel@gmail.com
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}