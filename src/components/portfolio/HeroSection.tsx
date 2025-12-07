import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero_background.png";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
}

export const HeroSection = ({
  name = "Your Name",
  tagline = "Computer Science Student & Full Stack Developer"
}: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 scale-105 animate-pulse-soft"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[1px]"></div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/20">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent drop-shadow-sm font-serif decoration-clone">
            {name}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            {tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="rounded-full px-10 py-7 text-lg gradient-primary shadow-soft hover:shadow-hover hover:scale-105 transition-all duration-500 font-medium tracking-wide"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 py-7 text-lg border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-foreground transition-all duration-500 backdrop-blur-sm shadow-sm"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:contact@example.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-4 rounded-full bg-white/50 dark:bg-black/20 border border-primary/10 hover:border-primary/40 hover:bg-primary/10 hover:shadow-soft transition-all duration-300 group backdrop-blur-sm"
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-primary/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
