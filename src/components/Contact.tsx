import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 glow">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors hover:border-primary/50 border border-border/50"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground mb-2">San Francisco, CA</p>
              <p className="text-muted-foreground">Available for remote work worldwide</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
