
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import AnimatedIcon from "./AnimatedIcon";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <motion.div 
        whileHover={{ y: -5 }}
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 relative"
      >
        {/* Glowing border effect on hover */}
        <motion.div 
          className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-md"
          transition={{ duration: 0.3 }}
        />

        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/90 z-10" />
          <motion.div
            className="absolute inset-0 bg-black z-0"
            style={{
              backgroundImage: `url('${project.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Scanning line effect */}
          <motion.div 
            className="absolute inset-x-0 h-0.5 bg-blue-400/70 z-20"
            animate={{ 
              top: ["0%", "100%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "loop", 
            }}
          />
          
          <div className="absolute bottom-4 left-4 z-20">
            <span className="bg-slate-900/80 backdrop-blur-md text-xs font-medium px-3 py-1 rounded-full text-blue-400 border border-blue-500/30">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-400 rounded-full opacity-75"></span>
                {project.tags[0]}
              </div>
            </span>
          </div>
          <motion.div
            className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-full shadow-md z-20 backdrop-blur-md border border-slate-700/50"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedIcon name={project.icon} size={24} color="rgb(96, 165, 250)" />
          </motion.div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors text-white">
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex justify-between items-end">
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(1, 3).map((tag, i) => (
                <span 
                  key={i}
                  className={cn(
                    "text-xs font-medium px-2.5 py-0.5 rounded-full",
                    "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </div>
        
        {/* Data flow at the bottom */}
        <div className="h-1 w-full bg-slate-800 relative overflow-hidden">
          <motion.div 
            className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            animate={{ 
              x: ["-100%", "100%"],
              width: ["20%", "40%", "20%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "loop", 
              ease: "linear",
              delay: index * 0.3
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
