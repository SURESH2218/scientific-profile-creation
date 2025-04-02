import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      color: "from-purple-600 to-blue-500",
    },
    {
      id: "education",
      icon: GraduationCap,
      label: "Education",
      onClick: () => scrollToSection("education-section"),
      color: "from-emerald-600 to-teal-500",
    },
    {
      id: "work",
      icon: Briefcase,
      label: "Work Experience",
      onClick: () => scrollToSection("work-experience-section"),
      color: "from-amber-600 to-orange-500",
    },
    {
      id: "awards",
      icon: Trophy,
      label: "Awards",
      onClick: () => scrollToSection("awards-section"),
      color: "from-rose-600 to-pink-500",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-[30%] right-0 z-50 space-y-2 py-4 px-[6px] rounded-l-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
        >
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                onClick={item.onClick}
                className={`rounded-full h-12 w-12 p-0 bg-gradient-to-r ${item.color} hover:scale-110 text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-r ${item.color}`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavigation;
