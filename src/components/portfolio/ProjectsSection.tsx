import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce MERN App",
      description: "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe API.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-app",
      liveUrl: "https://your-ecommerce-app.com",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      description: "A modern project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: project2,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-manager.com",
      featured: true
    },
    {
      title: "Cloud Infrastructure Visualizer",
      description: "Interactive dashboard for visualizing cloud resources, monitoring server health, and managing API connections in real-time.",
      image: project3,
      technologies: ["Vue.js", "D3.js", "AWS SDK", "WebSockets"],
      githubUrl: "https://github.com/yourusername/cloud-visualizer",
      liveUrl: "https://your-cloud-app.com",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with location-based forecasts, interactive maps, and responsive design for all devices.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Geolocation", "PWA"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://your-weather-app.com",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization, real-time updates, and export functionality.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Chart.js", "REST API", "Material-UI"],
      githubUrl: "https://github.com/yourusername/social-dashboard",
      liveUrl: "https://your-social-dashboard.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support using WebSocket technology.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/chat-app",
      liveUrl: "https://your-chat-app.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-serif">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A diverse collection of projects showcasing my passion for development and design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card
                className="overflow-hidden bg-white/50 dark:bg-card/40 backdrop-blur-sm border-white/50 dark:border-white/10 shadow-sm hover:shadow-card transition-all duration-500 group h-full flex flex-col rounded-[2rem]"
              >
                <div className="aspect-video relative overflow-hidden m-2 rounded-[1.5rem]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <Button variant="default" size="sm" asChild className="scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 rounded-full bg-white text-primary hover:bg-white/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="scale-0 group-hover:scale-100 transition-transform duration-300 delay-200 rounded-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                      {project.title}
                    </h3>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none rounded-full px-3">
                      Featured
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs rounded-full border-primary/20 bg-primary/5 text-primary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground font-serif">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="overflow-hidden bg-white/40 dark:bg-card/30 backdrop-blur-sm border-white/40 shadow-sm hover:shadow-soft transition-all duration-300 h-full rounded-3xl"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-secondary/50 text-secondary-foreground">
                        <Image className="w-6 h-6" />
                      </div>
                      <div className="flex gap-3">
                        <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs rounded-full bg-background/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 font-light">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 border-primary/30 hover:bg-primary/5 hover:border-primary/60 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/rashikagurjar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
