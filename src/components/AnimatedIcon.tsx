
import { motion } from "framer-motion";
import { BrainCircuit, Shield, Heart, MailCheck, Network, Database, LineChart, BarChart, PieChart, Users, Smartphone, LucideIcon } from "lucide-react";

type AnimatedIconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const iconComponents: Record<string, LucideIcon> = {
  Brain: BrainCircuit,
  Shield,
  Heart,
  MailCheck,
  Network,
  Database,
  LineChart,
  BarChart,
  PieChart,
  Users,
  Smartphone
};

const AnimatedIcon = ({ 
  name, 
  size = 24, 
  color = "currentColor",
  className = "" 
}: AnimatedIconProps) => {
  const Icon = iconComponents[name] || BrainCircuit;

  const getAnimation = () => {
    switch (name) {
      case "Shield":
        return {
          animate: { scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] },
          transition: { duration: 2, repeat: Infinity }
        };
      case "Heart":
        return {
          animate: { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] },
          transition: { duration: 1.5, repeat: Infinity }
        };
      case "MailCheck":
        return {
          animate: { y: [0, -3, 0], opacity: [0.8, 1, 0.8] },
          transition: { duration: 1.5, repeat: Infinity }
        };
      case "Network":
        return {
          animate: { rotate: [0, 10, 0, -10, 0] },
          transition: { duration: 4, repeat: Infinity }
        };
      case "Database":
        return {
          animate: { y: [0, -2, 0], opacity: [0.8, 1, 0.8] },
          transition: { duration: 2, repeat: Infinity }
        };
      case "LineChart":
        return {
          animate: { y: [0, -2, 0, 2, 0], x: [0, 1, 0, -1, 0] },
          transition: { duration: 4, repeat: Infinity }
        };
      case "BarChart":
        return {
          animate: { y: [0, -3, 0], scale: [1, 1.05, 1] },
          transition: { duration: 3, repeat: Infinity }
        };
      case "PieChart":
        return {
          animate: { rotate: [0, 15, 0, -15, 0] },
          transition: { duration: 4, repeat: Infinity }
        };
      case "Users":
        return {
          animate: { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] },
          transition: { duration: 3, repeat: Infinity }
        };
      case "Smartphone":
        return {
          animate: { y: [0, -2, 0], rotate: [0, 5, 0, -5, 0] },
          transition: { duration: 3, repeat: Infinity }
        };
      case "Brain":
      default:
        return {
          animate: { rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1] },
          transition: { duration: 4, repeat: Infinity }
        };
    }
  };

  const { animate, transition } = getAnimation();

  return (
    <motion.div
      animate={animate}
      transition={transition}
      className={className}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

export default AnimatedIcon;
