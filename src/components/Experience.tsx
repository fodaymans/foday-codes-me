import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer (Contract)",
      company: "ICGS Consultancy",
      period: "2021 – Present",
      responsibilities: [
        "Developed and deployed custom web applications tailored to meet client requirements",
        "Designed and implemented scalable databases to enhance application performance and functionality",
        "Collaborated with clients to gather specifications, translating them into intuitive and efficient software solutions",
        "Led end-to-end mobile app development, ensuring smooth integration with legacy systems",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Smart Systems SL Ltd",
      period: "January 2023 – 2024",
      responsibilities: [
        "Designed user interfaces, implemented server-side logic, and managed databases to ensure reliable application performance",
        "Maintained and updated in-house applications, addressing bugs and rolling out new features",
        "Developed custom software solutions for clients, tailored to meet specific business needs",
      ],
    },
    {
      title: "Software Developer (Contract)",
      company: "University of Sierra Leone",
      period: "July 2022 – July 2023",
      responsibilities: [
        "Spearheaded the development of new applications, enhancing operational efficiency across departments",
        "Maintained and added new features to the university portal, improving user experience and system performance",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="text-primary mb-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mb-4">{exp.period}</div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
