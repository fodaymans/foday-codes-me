import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Foday Mansaray
            </div>
            <p className="text-sm text-muted-foreground">
              Software Developer | Full-Stack Specialist
            </p>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="mailto:mansray0@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:23278473628"
              className="hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Foday Mansaray. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
