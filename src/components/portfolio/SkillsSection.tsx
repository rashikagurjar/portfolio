import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  GitBranch,
  Cpu
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "primary",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      title: "Frontend Development", 
      icon: Globe,
      color: "secondary",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "accent",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "MERN Stack",
      icon: Smartphone,
      color: "tertiary", 
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: Cpu,
      color: "primary",
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"]
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      color: "secondary",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary-foreground border-secondary/20", 
      accent: "bg-accent/10 text-accent-foreground border-accent/20",
      tertiary: "bg-tertiary/10 text-tertiary-foreground border-tertiary/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      secondary: "text-secondary-foreground bg-secondary/10",
      accent: "text-accent-foreground bg-accent/10", 
      tertiary: "text-tertiary-foreground bg-tertiary/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">  
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 gradient-card shadow-card hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${getIconColorClasses(category.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className={`${getColorClasses(category.color)} hover:scale-105 transition-smooth cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <div className="mt-16 text-center">
          <Card className="p-8 gradient-secondary shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Currently expanding my knowledge in cloud technologies, microservices architecture, 
              and advanced algorithm optimization techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AWS", "Docker", "Kubernetes", "GraphQL", "Machine Learning"].map((tech) => (
                <Badge key={tech} variant="outline" className="text-base py-2 px-4 border-primary/30 hover:bg-primary/5">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};