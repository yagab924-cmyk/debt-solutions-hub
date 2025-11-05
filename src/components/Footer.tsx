import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-accent" />
              <span className="font-bold">DebtRecovery Pro</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Professional debt collection services you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Collection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consumer Collection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Legal Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Portfolio Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>1-800-COLLECT</li>
              <li>info@debtrecovery.com</li>
              <li>123 Financial District</li>
              <li>New York, NY 10004</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} DebtRecovery Pro. All rights reserved. Licensed and bonded debt collection agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
