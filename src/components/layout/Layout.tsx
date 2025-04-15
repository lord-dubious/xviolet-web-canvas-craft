
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col dark:bg-background">
      <Header />
      
      <div className="flex flex-1">
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="fixed bottom-4 right-4 z-50 rounded-full bg-xviolet-primary text-white shadow-lg"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-sidebar dark:bg-sidebar-background">
              <Sidebar />
            </SheetContent>
          </Sheet>
        ) : (
          <Sidebar />
        )}
        
        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
      
      <footer className="h-10 bg-sidebar dark:bg-sidebar-background border-t border-sidebar-border">
        <div className="container flex items-center justify-between h-full px-8 mx-auto">
          <div className="text-sm text-muted-foreground">XViolet v1.0</div>
          <div className="text-sm text-muted-foreground">&copy; 2025 XViolet</div>
        </div>
      </footer>
    </div>
  );
};
