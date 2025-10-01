import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <Card className="bg-gradient-card border-border/50 shadow-card p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate and results-driven Software Developer with a strong enthusiasm for technology 
              and problem-solving. I am committed to continuous learning and innovation, excelling in 
              delivering creative, efficient, and user-centric solutions. Experienced in both frontend 
              and backend development, I thrive on overcoming challenges and contributing to the dynamic 
              tech landscape across various industries, including entertainment, fintech, and education.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-card border-border/50 shadow-card p-6 text-center hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card p-6 text-center hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 shadow-card p-6 text-center hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground">Hackathon Win</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
