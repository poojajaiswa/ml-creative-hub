
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />
      
      {/* Data grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="gridPattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>
      
      {/* Binary code effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute -inset-1/4 select-none text-[10px] text-blue-300 font-mono leading-none">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-full whitespace-nowrap opacity-30" style={{ marginTop: `${Math.random() * 3}rem` }}>
              {Array.from({ length: 150 }).map((_, j) => (
                <span key={j}>{Math.round(Math.random())}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated data nodes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-70"
            style={{
              width: `${Math.random() * 5 + 5}px`,
              height: `${Math.random() * 5 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" className="text-blue-300" strokeWidth="0.5">
          {/* Neural connections */}
          {Array.from({ length: 20 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            return Array.from({ length: 3 }).map((_, j) => (
              <line 
                key={`${i}-${j}`}
                x1={`${x1}%`} 
                y1={`${y1}%`} 
                x2={`${Math.random() * 100}%`} 
                y2={`${Math.random() * 100}%`} 
              />
            ));
          })}
        </g>
      </svg>
      
      {/* Futuristic particles */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] opacity-10 pointer-events-none">
        <motion.div
          className="w-full h-full rounded-full bg-cyan-300 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      {/* Additional glow effect */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] opacity-10 pointer-events-none">
        <motion.div
          className="w-full h-full rounded-full bg-blue-500 filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        />
      </div>
    </div>
  );
};

export default Background;
