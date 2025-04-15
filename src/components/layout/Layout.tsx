
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
      <div className="fixed top-4 right-4 z-[60]">
        <ThemeToggle />
      </div>
      
      <Header />
      
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
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      ) : (
        <Sidebar />
      )}
      
      <main className="xv-content">
        {children}
      </main>
      
      <footer className="xv-footer dark:bg-sidebar dark:text-sidebar-foreground dark:border-sidebar-border">
        <div>XViolet v1.0 &copy; 2025</div>
      </footer>
    </div>
  );
};
