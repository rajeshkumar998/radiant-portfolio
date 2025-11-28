import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© 2024 Creative Developer. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Index;
