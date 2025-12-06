import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Coffee } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-card shadow-soft overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-sm">Profile Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative floating cards */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary/10 rotate-12 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent/10 -rotate-12 animate-pulse delay-500"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a dedicated Computer Science student with a passion for full-stack development 
                and problem-solving. Currently pursuing my degree while building real-world projects 
                that showcase my growing expertise in modern web technologies.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My journey in programming started with curiosity about how digital products work, 
                and has evolved into a deep appreciation for clean code, user experience, and 
                scalable solutions.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <Card className="p-4 gradient-card shadow-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">CS Student</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 gradient-card shadow-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Coffee className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Focus</h4>
                    <p className="text-sm text-muted-foreground">Full Stack Dev</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};