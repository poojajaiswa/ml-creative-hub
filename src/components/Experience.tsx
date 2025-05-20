
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Data Scientist",
    company: "TechInnovate Inc.",
    period: "2021 - Present",
    description: "Leading a team of data scientists in developing ML models for predictive analytics. Implemented natural language processing solutions that increased customer engagement by 35%.",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Team Leadership"]
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataVision Analytics",
    period: "2018 - 2021",
    description: "Developed and deployed machine learning models for customer segmentation and churn prediction. Created interactive dashboards for real-time data visualization.",
    skills: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau"]
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "InsightfulMetrics",
    period: "2016 - 2018",
    description: "Analyzed large datasets to identify trends and provide actionable insights. Created automated reporting systems that saved 20 hours of manual work weekly.",
    skills: ["Python", "R", "SQL", "Excel", "Power BI"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          <div className="bg-blue-500/10 text-blue-400 text-sm font-medium py-1 px-4 rounded-full inline-block mb-4 backdrop-blur-sm border border-blue-500/20">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Career Path
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Professional
            </span>{" "}
            Experience
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-balance">
            My journey through the world of data science, analytics, and machine learning,
            solving real-world problems with data-driven approaches.
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

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="backdrop-blur-md border border-slate-700/50 bg-slate-900/80 overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
                <CardHeader className="relative pb-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-60"></div>
                  <CardTitle className="text-xl font-bold text-white flex justify-between items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-sm font-normal text-slate-400 flex items-center gap-1 whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                  </CardTitle>
                  <p className="text-blue-400 font-medium text-sm -mt-1">{item.company}</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-slate-300 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
