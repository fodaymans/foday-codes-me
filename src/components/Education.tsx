import { Card } from "@/components/ui/card";
import { GraduationCap, Award, FileCheck } from "lucide-react";

const Education = () => {
  const certifications = [
    "Microsoft SQL Server",
    "Modern JavaScript for React.js",
    "ASP.NET MVC",
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Awards</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">BSc. Information Technology</h3>
                  <div className="text-primary mb-1">Institute of Public Administration and Management</div>
                  <div className="text-sm text-muted-foreground">2019 – 2023</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hackathon Winner</h3>
                  <div className="text-primary mb-1">UNESCO India Africa Hackathon</div>
                  <div className="text-sm text-muted-foreground">2022</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-card p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
