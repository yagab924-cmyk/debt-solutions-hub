import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold">CreditGuard</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Products
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Get Started
            </a>
          </nav>
          
          <Button variant="premium">
            Sign Up Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
