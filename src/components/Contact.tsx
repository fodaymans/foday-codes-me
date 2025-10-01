import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:mansray0@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                mansray0@gmail.com
              </a>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:23278473628"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +232 78 473 628
              </a>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Sierra Leone</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <a href="mailto:mansray0@gmail.com">Send Me an Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
