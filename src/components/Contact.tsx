
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, BrainCircuit } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/poojajaiswa",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/poojajaiswal88/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Email",
    href: "mailto:iampoojajaiswal7440@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  // {
  //   name: "Phone",
  //   href: "tel:+917440970588",
  //   icon: <Phone className="w-5 h-5" />,
  // },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl -z-10"></div>
          
          {/* Neural network visualization in background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none -z-5">
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g stroke="currentColor" className="text-blue-400" fill="none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <g key={i}>
                    {Array.from({ length: 6 }).map((_, j) => (
                      <circle 
                        key={j} 
                        cx={100 + i * 70} 
                        cy={400 + (j - 3) * 60} 
                        r="5" 
                        fill="currentColor"
                      />
                    ))}
                  </g>
                ))}
                
                {/* Connection lines between nodes */}
                {Array.from({ length: 200 }).map((_, i) => {
                  const x1 = 100 + Math.floor(i / 20) * 70;
                  const y1 = 400 + ((i % 6) - 3) * 60;
                  const x2 = 100 + Math.floor(i / 20 + 1) * 70;
                  const y2 = 400 + (Math.floor(Math.random() * 6) - 3) * 60;
                  return Math.floor(i / 20) < 9 ? (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.3" />
                  ) : null;
                })}
              </g>
            </svg>
          </div>
          
          {/* Glowing border */}
          <div className="absolute inset-0 border border-blue-500/20 rounded-2xl"></div>
          
          {/* Data pulse points */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-8 py-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                className="h-1 w-1 rounded-full bg-blue-400"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.4
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 inline-block"
            >
              <div className="relative">
                <BrainCircuit className="w-12 h-12 text-blue-400 mx-auto" />
                <motion.div 
                  className="absolute -inset-3 rounded-full border border-blue-500/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Neural <span className="text-blue-400">Connections</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-balance">
              Interested in collaborating on machine learning projects or discussing
              advanced data science methodologies? Let's connect.
            </p>
            
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-800 shadow-lg flex items-center justify-center border border-slate-700 relative group">
                    <div className="z-10 relative">
                      {link.icon}
                    </div>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 -z-0"
                      animate={{ scale: [0.8, 1], opacity: [0, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Bottom data visualizer */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
            <motion.div 
              className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-cyan-400"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
