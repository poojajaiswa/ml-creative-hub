
import { motion } from "framer-motion";
import { BrainCircuit, ChevronDown, Database, Network } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-16 flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.03] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 200 200" className="w-[140%] h-[140%]" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" className="text-blue-400" strokeWidth="0.3">
            {Array.from({ length: 20 }).map((_, i) => (
              <circle key={i} cx="100" cy="100" r={50 + i * 5} />
            ))}
          </g>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div 
          className="mb-6 inline-block"
          animate={{ 
            rotateZ: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="relative">
            <BrainCircuit className="w-16 h-16 md:w-20 md:h-20 text-blue-400 mx-auto" />
            <motion.div 
              className="absolute -inset-4 rounded-full border border-blue-500/30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-blue-500/10 text-blue-400 text-sm font-medium py-1 px-4 rounded-full inline-block mb-6 backdrop-blur-sm border border-blue-500/20">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              Artificial Intelligence & Machine Learning
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pooja Jaiswal
          </span>
          <div className="text-3xl md:text-5xl mt-2">Data Scientist & ML Engineer</div>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Exploring the frontiers of data science and neural networks to unlock
          insights and build predictive models that solve tomorrow's challenges.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20 border border-blue-400/20"
          >
            <Network className="w-5 h-5" />
            Explore Projects
          </a>
          <a 
            href="#contact" 
            className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 rounded-lg font-medium inline-flex items-center gap-2 transition-colors border border-slate-700"
          >
            <Database className="w-5 h-5" />
            Connect
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>

      {/* Animated data side elements */}
      <div className="absolute top-0 right-0 h-full w-8 opacity-40 flex flex-col justify-between py-20 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div 
            key={i}
            className="h-6 bg-blue-500/30 rounded-l-md"
            animate={{ 
              width: ["10px", `${Math.random() * 30 + 10}px`, "10px"],
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.7
            }}
          />
        ))}
      </div>
      
      <div className="absolute top-0 left-0 h-full w-8 opacity-40 flex flex-col justify-between py-32 pointer-events-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div 
            key={i}
            className="h-6 bg-cyan-500/30 rounded-r-md ml-auto"
            animate={{ 
              width: ["10px", `${Math.random() * 40 + 15}px`, "10px"],
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity,
              repeatType: "reverse", 
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
