import { Scene3D } from "./Scene3D";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Portfolio",
    description: "A stunning portfolio website with immersive 3D animations and smooth transitions",
    tech: ["React", "Three.js", "TypeScript"],
  },
  {
    title: "AI-Powered Dashboard",
    description: "Modern analytics dashboard with real-time data visualization and AI insights",
    tech: ["Next.js", "D3.js", "TailwindCSS"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced filtering and payment integration",
    tech: ["React", "Node.js", "Stripe"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-1/3 h-96 opacity-20">
        <Scene3D variant="project" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected work showcasing creativity and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-strong group h-full flex flex-col">
                <div className="aspect-video bg-secondary/50 rounded-lg mb-4 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                  <div className="w-24 h-24">
                    <Scene3D variant="project" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
