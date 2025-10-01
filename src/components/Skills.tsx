import { Card } from "@/components/ui/card";
import { Code2, Database, Smartphone, Server, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      skills: ["C#", "Express", "Node.js", "RESTful APIs"],
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      skills: ["ASP.NET", "React.js", "Bootstrap", "Material-UI", "HTML", "CSS"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Development",
      skills: ["React Native", "Android (Java)"],
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Systems",
      skills: ["MSSQL", "MySQL", "Oracle"],
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
