import { Card } from "@/components/ui/card";
import { Building2, Users, FileText, Scale, TrendingUp, Clock } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Debt Recovery",
    description: "Specialized in B2B debt collection with a focus on maintaining business relationships while recovering outstanding payments.",
  },
  {
    icon: Users,
    title: "Consumer Debt Collection",
    description: "Ethical and compliant consumer debt recovery services that respect debtor rights while protecting your interests.",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description: "Complete legal support including demand letters, settlement agreements, and court filing assistance.",
  },
  {
    icon: Scale,
    title: "Litigation Support",
    description: "Expert witness testimony and comprehensive litigation support for complex debt recovery cases.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management",
    description: "Strategic management of large debt portfolios with detailed reporting and analytics.",
  },
  {
    icon: Clock,
    title: "Skip Tracing",
    description: "Advanced debtor location services using cutting-edge technology and investigative techniques.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive debt collection solutions tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border/50"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
