import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Harcourt Butler Technical University",
      period: "2025–2027",
      location: "Kanpur, India",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Bundelkhand University",
      period: "Graduated",
      location: "Jhansi, India",
    }
  ];

  const certifications = [
    {
      title: "Prompt Engineering",
      issuer: "DeepLearning.AI",
      icon: Award
    },
    {
      title: "Intro to GenAI",
      issuer: "Google Cloud",
      icon: Award
    },
    {
      title: "Building RAG Systems",
      issuer: "DeepLearning.AI",
      icon: Award
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-t from-background to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic journey and specialized training in AI/ML and software engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground border-b border-border/50 pb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Degrees
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="p-6 bg-white/40 dark:bg-card/40 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-soft group rounded-[1.5rem]">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-lg text-foreground/80 font-medium mb-4">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-light">
                    <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" /> {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4" /> {item.location}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-foreground border-b border-border/50 pb-4">
              <Award className="w-6 h-6 text-accent" />
              Specialized Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((item, index) => (
                <Card key={index} className="p-5 flex items-center gap-5 bg-white/40 dark:bg-card/40 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 shadow-sm rounded-2xl group">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.issuer}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
