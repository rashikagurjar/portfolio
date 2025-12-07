import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent with love! 💖",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/rashikagurjar",
      color: "hover:text-foreground hover:bg-white/80"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/rashika-singh-gurjar-867410373/",
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      icon: Twitter,
      title: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400 hover:bg-sky-50"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-serif">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="p-8 h-full bg-white/50 dark:bg-card/40 backdrop-blur-sm border-white/50 dark:border-white/10 shadow-sm hover:shadow-soft transition-all duration-300 rounded-[2rem]">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-secondary/50 text-secondary-foreground">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-serif">Get In Touch</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/20 text-primary/70 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{info.title}</p>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-primary/10">
                <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center">Connect with me</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        whileHover={{ y: -5 }}
                        className={`p-3 rounded-xl bg-background/50 border border-transparent hover:border-primary/20 hover:shadow-sm transition-all duration-300 ${social.color}`}
                        title={social.title}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 md:p-10 bg-white/60 dark:bg-card/60 backdrop-blur-md border-white/50 dark:border-white/10 shadow-card rounded-[2rem]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-primary/10 bg-white/50 dark:bg-black/20 focus:border-primary/50 focus:ring-primary/20 h-12 transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                      Email Address <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl border-primary/10 bg-white/50 dark:bg-black/20 focus:border-primary/50 focus:ring-primary/20 h-12 transition-all duration-300"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground ml-1">
                    Subject <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border-primary/10 bg-white/50 dark:bg-black/20 focus:border-primary/50 focus:ring-primary/20 h-12 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="rounded-xl border-primary/10 bg-white/50 dark:bg-black/20 focus:border-primary/50 focus:ring-primary/20 resize-none transition-all duration-300 min-h-[150px]"
                    placeholder="Tell me about your amazing idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full h-14 text-lg font-medium gradient-primary shadow-soft hover:shadow-hover hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>

                  {isSubmitting ? (
                    <div className="flex items-center gap-2 relative z-10">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending with love...
                    </div>
                  ) : (
                    <span className="flex items-center gap-2 relative z-10">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-10 gradient-secondary shadow-soft max-w-2xl mx-auto border-white/50 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-[2.5rem]">
            <h3 className="text-2xl font-bold mb-4 text-foreground font-serif">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-8 font-light">
              Let's create something beautiful together.
            </p>
            <Button
              className="rounded-full px-8 py-6 gradient-primary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              size="lg"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
