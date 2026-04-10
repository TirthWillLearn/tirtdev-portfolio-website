import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-hero-gradient">
      <Navigation />
      <main className="flex-1 pt-16">{children}</main>
      <footer className="text-sm text-muted-foreground text-center py-6 border-t border-border">
        © 2025 <span className="text-primary font-medium">Tirth Patel</span>.
        All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
