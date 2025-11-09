import { FileText, Bell, Shield, TrendingUp, Lock, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import servicesBg from "@/assets/services-financial-bg.jpg";

const services = [
  {
    icon: FileText,
    title: "Credit Reports & Scores",
    description: "Access your complete credit report and score updated daily. See detailed credit history, account information, and factors affecting your score.",
  },
  {
    icon: Bell,
    title: "Credit Monitoring",
    description: "Get instant alerts for important changes to your credit report. Stay informed about new accounts, inquiries, and potential fraud.",
  },
  {
    icon: Shield,
    title: "Identity Protection",
    description: "Advanced monitoring of your personal information across the dark web and public records. Immediate alerts if your identity is compromised.",
  },
  {
    icon: TrendingUp,
    title: "Credit Score Insights",
    description: "Understand what impacts your credit score with personalized insights. Get actionable recommendations to improve your credit health.",
  },
  {
    icon: Lock,
    title: "Fraud Prevention",
    description: "Protect yourself from identity theft with real-time monitoring and alerts. Lock and unlock your credit report instantly when needed.",
  },
  {
    icon: CreditCard,
    title: "Personalized Offers",
    description: "Receive credit card and loan offers tailored to your credit profile. Find the best financial products matched to your credit health.",
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for Credit Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your credit, protect your identity, and access personalized financial insights all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="mb-6 p-4 bg-accent/10 rounded-lg inline-block">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
