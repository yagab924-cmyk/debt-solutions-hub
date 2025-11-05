import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to recover your outstanding debts? Contact us for a free consultation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card 
            className="p-8 md:p-12"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-muted-foreground">1-800-COLLECT</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@debtrecovery.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Office</div>
                      <div className="text-muted-foreground">
                        123 Financial District<br />
                        New York, NY 10004
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-secondary rounded-lg">
                  <div className="text-sm font-semibold mb-1">Business Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Response</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <Button size="lg" variant="premium" className="w-full">
                  Request Free Consultation
                </Button>
                
                <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                  <h4 className="font-semibold mb-3 text-accent">Free Consultation Includes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Case evaluation and recovery estimate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Customized collection strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>No obligation, completely confidential</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
