import { Button } from "@/components/ui/button";
import { Mail, Shield, Clock, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-semibold text-sm">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Monitoring Your Credit Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sign up in minutes and get instant access to your credit score, full report, and personalized insights completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-card border border-border rounded-lg flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Quick Setup</h3>
                <p className="text-muted-foreground">Create your account in under 2 minutes</p>
                <p className="text-sm text-muted-foreground mt-1">No credit card required</p>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Instant Access</h3>
                <p className="text-muted-foreground">See your credit score immediately</p>
                <p className="text-sm text-muted-foreground mt-1">Full report available right away</p>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Secure & Private</h3>
                <p className="text-muted-foreground">Bank-level encryption protects your data</p>
                <p className="text-sm text-muted-foreground mt-1">Your information is safe with us</p>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">24/7 Support</h3>
                <p className="text-muted-foreground">Help available whenever you need it</p>
                <p className="text-sm text-muted-foreground mt-1">support@creditguard.com</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="premium" className="text-lg">
              Sign Up Free - No Credit Card Required
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free forever • Daily updates • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
