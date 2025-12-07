import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Cpu,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "primary",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C++", "Rust"]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "secondary",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "accent",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Prisma"]
    },
    {
      title: "MERN Stack",
      icon: Smartphone,
      color: "tertiary",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack", "Redux"]
    },
    {
      title: "Data Structures",
      icon: Cpu,
      color: "primary",
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting"]
    },
    {
      title: "Tools & Tech",
      icon: GitBranch,
      color: "secondary",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Vite"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
      secondary: "bg-secondary/40 text-secondary-foreground border-secondary/20 hover:bg-secondary/60",
      accent: "bg-accent/20 text-accent-foreground border-accent/20 hover:bg-accent/30",
      tertiary: "bg-tertiary/20 text-tertiary-foreground border-tertiary/20 hover:bg-tertiary/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      secondary: "text-secondary-foreground bg-secondary",
      accent: "text-accent-foreground bg-accent/20",
      tertiary: "text-tertiary-foreground bg-tertiary/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            My Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-serif">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive collection of tools I use to bring creative ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div variants={item} key={category.title}>
                <Card
                  className="p-6 h-full bg-white/50 dark:bg-card/40 backdrop-blur-sm border-white/40 dark:border-white/10 shadow-sm hover:shadow-soft hover:scale-[1.02] transition-all duration-300 group rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${getIconColorClasses(category.color)} transition-transform duration-300 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${getColorClasses(category.color)} rounded-full px-3 py-1 font-normal transition-all duration-300 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-10 gradient-secondary shadow-soft max-w-4xl mx-auto border-white/50 bg-white/30 backdrop-blur-md rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4 text-foreground font-serif">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg text-muted-foreground mb-8 font-light">
              Currently expanding my horizons with these exciting technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AWS", "Docker", "Kubernetes", "GraphQL", "Machine Learning"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                >
                  <Badge variant="outline" className="text-base py-2 px-5 rounded-full border-primary/30 bg-background/50 hover:bg-primary/10 hover:border-primary transition-colors cursor-default">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
