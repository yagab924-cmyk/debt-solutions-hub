import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-accent font-semibold">Professional Debt Recovery</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Recover What's Rightfully Yours
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Expert debt collection services with proven results. We combine legal expertise with ethical practices to recover your outstanding debts efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" className="text-lg">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-primary-foreground">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-sm opacity-90">Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
