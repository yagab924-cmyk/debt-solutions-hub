import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold">TransUnion</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner for credit monitoring, identity protection, and financial insights. 
              Empowering millions to take control of their credit health.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Credit Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Credit Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Identity Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Credit Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} CreditGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
