import { Scene3D } from "./Scene3D";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Award, Coffee, Heart, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Heart, value: "100+", label: "Projects Completed" },
];

export const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-full opacity-20">
        <Scene3D variant="about" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating immersive digital experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg leading-relaxed mb-4">
                I'm a creative developer specializing in building extraordinary digital experiences.
                With a passion for both design and technology, I craft interactive websites and
                applications that push the boundaries of what's possible on the web.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My approach combines cutting-edge 3D graphics, smooth animations, and intuitive
                interfaces to create memorable user experiences. I believe in the power of
                storytelling through code and design.
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-strong text-center group">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold mb-1 text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
