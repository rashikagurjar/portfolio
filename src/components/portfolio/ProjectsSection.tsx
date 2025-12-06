import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce MERN App",
      description: "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe API.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-app",
      liveUrl: "https://your-ecommerce-app.com",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      description: "A modern project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/api/placeholder/400/250", 
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-manager.com",
      featured: true
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting algorithms, pathfinding algorithms, and data structures in real-time.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      githubUrl: "https://github.com/yourusername/algo-visualizer",
      liveUrl: "https://your-algo-visualizer.com",
      featured: false
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating proficiency in full-stack development and problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden gradient-card shadow-card hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Image className="w-16 h-16 text-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">Project Screenshot</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Featured
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="gradient-primary hover:shadow-hover transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary/5 transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden gradient-card shadow-card hover-lift group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-secondary/10 to-tertiary/10 flex items-center justify-center">
                  <Image className="w-12 h-12 text-muted-foreground" />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 transition-smooth"
            asChild
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
