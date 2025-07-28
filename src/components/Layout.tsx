import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navigation />
      <main className="pt-16">
        {children}
        <footer className="text-sm text-muted-foreground text-center py-6 border-t border-border mt-20">
          © 2025 <span className="text-primary font-medium">Tirth Patel</span>.
          All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Layout;
