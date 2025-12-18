import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
  


 {
      title: "Sierra Leone Insurance Company",
      description: "Portal for managing customer records , complaints ,managing payments and also commission for marketers.",
      link: "http://slcoadmin.icgs.xyz",
       credentials: "username: Admin | pass: 12345",
      category: "Insurance",
    },

    {
      title: "eGovernment System",
      description: "Comprehensive eGovernment system built with React.js for streamlined government operations.",
      link: "http://egov.smartsystemsserver.xyz/login",
      credentials: "username: moud | pass: 12345",
      category: "Government",
    },
    {
      title: "Apex Bank Disbursement System",
      description: "Bulk disbursement system to streamline financial transactions, improving speed and accuracy in payout processing.",
      link: "http://apexbulkpay.smartsystemsserver.xyz",
      category: "Fintech",
    },
    {
      title: "LAPO Disbursement System",
      description: "UNDP-backed project developed in collaboration with LAPO to drive economic and social impact through efficient disbursement management.",
      link: "http://lapodisbursement.smartsystemsserver.xyz",
      category: "Fintech",
    },
    {
      title: "Kings Empire Africa",
      description: "Entertainment voting web application enabling seamless user participation and voting functionality.",
      link: "https://kingsempiresl.com/",
      category: "Entertainment",
    },
    {
      title: "Vult Raffle Draw",
      description: "Secure, transparent, and automated raffle draw application for a fintech company.",
      link: "http://vult.icgs.xyz/",
      category: "Fintech",
    },
    {
      title: "Motorbike ID Card Application",
      description: "Application for capturing and printing motorbike riders' ID cards with instant capture, QR code integration, and on-the-spot printing.",
      link: "http://demo.icgssystems.com:3004/",
      category: "Government",
    },
    {
      title: "Student Loan Portal",
      description: "Online portal for Student Loan Scheme, allowing students to efficiently apply for educational loans.",
      link: "https://studentloan.gov.sl/",
      category: "Education",
    },
    {
      title: "Sierra Leone Writers Series",
      description: "Website supporting local authors and promoting their work online.",
      link: "https://slwritersseries.org/",
      category: "Education",
    },

     {
      title: "Energy Generation & Sales Tracker",
      description: "React.js application for tracking energy generation and sales across various sectors for the power supply authority.",
      link: "http://demo.icgssystems.com:3000/",
      credentials: "username: mansray0@gmail.com | pass: O4EU3",
      category: "Government",
    },

     {
      title: "JJB Restaurant Menu",
      description: "An online menu which allows customers to view the menu via QR-Code Scanning.",
      link: "https://jjbmenu.icgs.xyz",
      category: "Restaurant",
    },

     {
      title: "Ady Macauley Campaign Website",
      description: "A Portfolio website for a potential candidate for the APC political party in Sierra Leone .",
      link: "https://ady4you.icgs.xyz",
      category: "Website",
    },

     {
      title: "Agrovate",
      description: "A Web application funded by the Governemnt of Sierra Leone which is used to send funds,agricultural items to farmers and dealers, which makes it seamless for running of Agriculture in Sierra Leone .",
      link: "https://fsrp.agvouchers.com",
      category: "Government",
    },

  
     {
      title: "Sahia Foods",
      description: "A Web application funded by the Governemnt of Sierra Leone which is used to send funds,agricultural items to farmers and dealers, which makes it seamless for running of Agriculture in Sierra Leone .",
      link: "https://www.sahiafoods.com",
      category: "Agriculture",
    },

      {
      title: "Invoice Management System",
      description: "A Web application funded by the Governemnt of Sierra Leone which is used to send funds,agricultural items to farmers and dealers, which makes it seamless for running of Agriculture in Sierra Leone .",
      link: "https://www.sahiafoods.com",
      category: "Fintech",
    },

      {
      title: "Cash Request System",
      description: "A Web application funded by the Governemnt of Sierra Leone which is used to send funds,agricultural items to farmers and dealers, which makes it seamless for running of Agriculture in Sierra Leone .",
      link: "https://www.sahiafoods.com",
      category: "Fintech",
    },

  ];

  const categories = ["All", "Government", "Fintech", "Education", "Entertainment","Insurance","Restaurant","Website"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my work across various sectors including government, fintech, education, and entertainment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                {project.credentials && (
                  <p className="text-xs text-muted-foreground mb-4 font-mono bg-muted/30 p-2 rounded">
                    {project.credentials}
                  </p>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 group"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
