import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/ppp.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Foday Mansaray - Software Developer" 
                className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>
          
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              Software Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Foday Mansaray
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
Passionate full-stack developer crafting innovative solutions across entertainment, fintech, education, and health.          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground animate-fade-in-up animation-delay-400">
            <a href="mailto:mansray0@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="tel:23278473628" className="hover:text-primary transition-colors" aria-label="Phone">
              <Phone size={24} />
            </a>
            <a href="https://github.com/fodaymans" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/foday-mansaray-084554259/" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
