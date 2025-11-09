import { CheckCircle2, Shield, TrendingUp, Bell, Lock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Free Daily Updates",
    description: "Access your credit score and full credit report every single day at no cost. Stay on top of your credit health with the latest information.",
  },
  {
    icon: Shield,
    title: "Identity Protection",
    description: "Advanced monitoring across the dark web and public records. Receive immediate alerts if your personal information is compromised.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get instant notifications for critical changes to your credit report including new accounts, inquiries, and address changes.",
  },
  {
    icon: Lock,
    title: "Credit Lock Feature",
    description: "Lock and unlock your credit file instantly with a single tap. Prevent unauthorized access and protect against identity theft.",
  },
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description: "Receive tailored recommendations and credit-matched offers. Understand exactly what steps to take to improve your credit score.",
  },
  {
    icon: CheckCircle2,
    title: "Easy to Use",
    description: "Simple, intuitive interface makes monitoring your credit effortless. Access everything you need from one convenient dashboard.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">Why CreditGuard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your Credit Confidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join millions who trust CreditGuard to monitor their credit and protect their financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <div className="mb-6 p-4 bg-accent/10 rounded-lg inline-block">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
