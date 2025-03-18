
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Network } from "lucide-react";

const ProjectList = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          {/* Background circuit pattern */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g fill="none" stroke="currentColor" className="text-blue-500">
                <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" />
                <line x1="20" y1="20" x2="80" y2="80" strokeWidth="0.5" />
                <line x1="20" y1="80" x2="80" y2="20" strokeWidth="0.5" />
              </g>
            </svg>
          </div>

          <div className="bg-blue-500/10 text-blue-400 text-sm font-medium py-1 px-4 rounded-full inline-block mb-4 backdrop-blur-sm border border-blue-500/20">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4" />
              Neural Networks
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Data Science
            </span>{" "}
            Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-balance">
            Explore my portfolio of AI and machine learning projects leveraging
            cutting-edge algorithms and deep learning architectures.
          </p>

          {/* Decorative elements */}
          <motion.div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 opacity-10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-blue-400" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-blue-400" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-blue-400" strokeWidth="1" />
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 opacity-10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
