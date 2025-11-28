import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Scene3D } from "./Scene3D";

const experiences = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    organization: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of interactive web applications with React, Three.js, and modern web technologies. Mentoring junior developers and architecting scalable solutions.",
    achievements: ["Built 15+ production apps", "Reduced load time by 60%", "Led team of 5 developers"]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated with designers to create stunning user experiences.",
    achievements: ["30+ client projects", "Implemented CI/CD pipeline", "Improved SEO by 80%"]
  },
  {
    type: "education",
    title: "Master of Computer Science",
    organization: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in Computer Graphics and Human-Computer Interaction. Thesis on 'Interactive 3D Visualization for Web Applications'.",
    achievements: ["GPA: 3.9/4.0", "Research published", "Dean's List"]
  },
  {
    type: "work",
    title: "Junior Developer",
    organization: "StartUp Labs",
    period: "2017 - 2018",
    description: "Started career building responsive websites and learning modern web development practices. Contributed to multiple client projects.",
    achievements: ["10+ websites launched", "Mastered React", "Best newcomer award"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "State University",
    period: "2013 - 2017",
    description: "Foundation in computer science fundamentals, algorithms, and software engineering. Active member of coding club.",
    achievements: ["Honors graduate", "Hackathon winner", "Club president"]
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/4 h-96 opacity-20 pointer-events-none">
        <Scene3D variant="skill" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } pl-20 md:pl-0`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-primary shadow-strong z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </motion.div>

                {/* Icon */}
                <div
                  className={`absolute left-0 md:left-auto top-4 ${
                    index % 2 === 0 ? "md:right-full md:mr-12" : "md:left-full md:ml-12"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-strong group overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-primary font-semibold">{item.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
