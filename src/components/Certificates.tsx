
import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap, BadgeCheck, FileCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// Updated certificate data with your professional certifications and images
const certificates = [
  {
    id: 1,
    title: "Data Science Professional Certificate",
    issuer: "RPS Bussiness Solution",
    date: "2024",
    icon: <BadgeCheck className="w-5 h-5" />,
    link: "https://drive.google.com/file/d/1zlpbHTD6u5biohvmzy0gLmLgnmjbuHWC/view?usp=sharing",
    image: "https://www.shutterstock.com/image-vector/data-science-deep-learning-artificial-260nw-2419302263.jpg",
  },
  {
    id: 2,
    title: "AI",
    issuer: "Great Learning Academy",
    date: "2024",
    icon: <GraduationCap className="w-5 h-5" />,
    link: "https://drive.google.com/file/d/14ZUsnS2HosuRft6oFV3ox5ZtEeHeuBdA/view?usp=sharing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjH02IH40ldwjjoWujtOknnuGgBOfktlRmkdmIsvJBmdzQiYmBX1vM3Jzp6YOyFT6Jpw&usqp=CAU",
  },
  
  {
    id: 3,
    title: "Deep Learning Fundamentals",
    issuer: "Great Learning Academy",
    date: "2024",
    icon: <FileCheck className="w-5 h-5" />,
    link: "https://drive.google.com/file/d/15f72qSqiADvJEIxMO-y37UG_1TRUoP7Q/view?usp=sharing",
    image: "https://cdn-icons-png.flaticon.com/256/4413/4413458.png",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "Great Learning Academy",
    date: "2024",
    icon: <Award className="w-5 h-5" />,
    link: "https://drive.google.com/file/d/1V2kPbvfRs36lGzoox3zM7SNZuPc4UmhL/view?usp=sharing",
    image: "https://static-00.iconduck.com/assets.00/python-icon-512x512-rv6f5bcf.png"
    

  },
  
  // {
  //   id: 5,
  //   title: "Big Data Analytics",
  //   issuer: "Coursera",
  //   date: "2021",
  //   icon: <FileCheck className="w-5 h-5" />,
  //   link: "#",
  //   image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // },
  
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
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
              <GraduationCap className="w-4 h-4" />
              Professional Credentials
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Professional
            </span>{" "}
            Certifications
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-balance">
            Industry-recognized certifications demonstrating expertise in advanced data science 
            methodologies, machine learning algorithms, and AI technologies.
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-slate-700/50 bg-slate-900/80 backdrop-blur-md h-full group-hover:border-blue-500/50 transition-colors duration-300">
                <div className="relative h-44 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute bottom-3 right-3 z-20">
                    <Avatar className="border-2 border-blue-500/20 h-12 w-12 rounded-lg">
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${certificate.issuer}&background=0D8ABC&color=fff`} />
                      <AvatarFallback className="bg-blue-500/10 text-blue-400 rounded-lg">
                        {certificate.issuer.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20">
                      {certificate.icon || <Award className="w-6 h-6 text-blue-400" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {certificate.title}
                      </h3>
                      <p className="text-slate-400 mt-1 flex items-center justify-between">
                        <span>{certificate.issuer}</span>
                        <span className="text-sm text-slate-500">{certificate.date}</span>
                      </p>
                    </div>
                    <a 
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <motion.div whileHover={{ rotate: 15 }}>
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </a>
                  </div>
                  
                  {/* Data flow at the bottom */}
                  <div className="h-0.5 w-full bg-slate-800 absolute bottom-0 left-0 overflow-hidden">
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
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
