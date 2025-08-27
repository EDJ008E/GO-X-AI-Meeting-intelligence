import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          
          <main className="flex-1 flex flex-col">
            {/* Mobile Header with Sidebar Toggle */}
            <header className="lg:hidden h-16 flex items-center border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
              <SidebarTrigger className="ml-4" />
              <div className="flex items-center gap-3 ml-4">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div className="gradient-text text-xl font-bold">GO-X</div>
              </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1">
              {children}
            </div>
          </main>
        </div>

        <Toaster />
        <Sonner />
      </SidebarProvider>
    </TooltipProvider>
  );
}