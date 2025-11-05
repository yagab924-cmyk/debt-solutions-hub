import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "FDCPA Compliant",
    description: "All our practices strictly adhere to the Fair Debt Collection Practices Act and state regulations.",
  },
  {
    title: "No Recovery, No Fee",
    description: "Our contingency-based model means you only pay when we successfully recover your debt.",
  },
  {
    title: "Fast Results",
    description: "Average recovery time of 30-45 days with our streamlined processes and expert negotiators.",
  },
  {
    title: "Transparent Reporting",
    description: "Real-time access to case status, detailed reporting, and regular updates on all accounts.",
  },
  {
    title: "Preserve Relationships",
    description: "We use professional, respectful communication to maintain your business relationships.",
  },
  {
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple industries including healthcare, retail, and finance.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine industry-leading expertise with ethical practices to deliver results you can trust. Our proven track record speaks for itself.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: 'var(--shadow-hover)' }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 p-12 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold mb-4">$50M+</div>
                  <div className="text-2xl mb-8">Successfully Recovered</div>
                  <div className="grid grid-cols-2 gap-8 text-left">
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
                      <div className="text-sm opacity-90">Cases Resolved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">98%</div>
                      <div className="text-sm opacity-90">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
