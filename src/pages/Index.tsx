
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  // Create images directory if needed
  useEffect(() => {
    console.log("Futuristic Data Science Portfolio loaded successfully!");
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative bg-slate-950 text-white"
      >
        <Background />
        <Navbar />
        <main>
          <Hero />
          <ProjectList />
          <Certificates />
          <Contact />
        </main>
        
        <footer className="py-6 text-center text-slate-500 text-sm backdrop-blur-md bg-slate-900/50 border-t border-slate-800/50">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Advanced Data Science Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
