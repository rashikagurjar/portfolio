import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile_avatar.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital solutions with a touch of elegance and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 backdrop-blur-sm p-4 shadow-soft rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative group">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Decorative floating cards */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [5, 10, 5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-white/80 dark:bg-card/80 backdrop-blur-md shadow-card flex items-center justify-center border border-white/50"
            >
              <Heart className="w-10 h-10 text-primary fill-primary/20" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [-5, -10, -5] }}
              transition={{ repeat: Infinity, duration: 7, delay: 1, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl bg-white/80 dark:bg-card/80 backdrop-blur-md shadow-card flex items-center justify-center border border-white/50"
            >
              <span className="text-2xl">✨</span>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <p className="text-lg text-foreground leading-relaxed font-light">
                I'm a dedicated Computer Science student with a passion for web development
                and design. I love blending code with aesthetics to create user experiences
                that are not just functional, but delightful to use.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-light">
                My journey started with a simple curiosity for how websites work,
                blossoming into a love for building scalable applications with modern technologies
                and clean, maintainable code.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                { icon: GraduationCap, title: "Education", subtitle: "CS Student", color: "text-primary" },
                { icon: Code, title: "Stack", subtitle: "Full Stack", color: "text-accent" },
                { icon: Heart, title: "Passion", subtitle: "UI/UX Design", color: "text-secondary-foreground" },
                { icon: Coffee, title: "Drive", subtitle: "Problem Solving", color: "text-tertiary-foreground" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className="p-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm border-white/50 hover:border-primary/30 shadow-sm hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white dark:bg-white/5 shadow-sm`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
