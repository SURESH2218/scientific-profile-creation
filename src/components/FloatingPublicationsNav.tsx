import React, { useState } from "react";
import { FileText, BookOpen, Award, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingPublicationsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FloatingPublicationsNav: React.FC<FloatingPublicationsNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    {
      name: "publications",
      icon: FileText,
      label: "Publications",
      color: "bg-violet-500",
      angle: 0,
    },
    {
      name: "patents",
      icon: BookOpen,
      label: "Patents",
      color: "bg-emerald-500",
      angle: 90,
    },
    {
      name: "awards",
      icon: Award,
      label: "Awards",
      color: "bg-amber-500",
      angle: 180,
    },
    {
      name: "conferences",
      icon: Users,
      label: "Conferences",
      color: "bg-rose-500",
      angle: 270,
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full h-44 flex items-center justify-center mb-6">
      {/* Main floating button */}
      <motion.button
        onClick={toggleMenu}
        className={cn(
          "absolute z-50 w-16 h-16 rounded-full flex items-center justify-center",
          "bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg",
          "hover:shadow-xl transition-shadow"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <FileText className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Floating menu items */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu items */}
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              const radius = 80; // Distance from center
              const angle = (tab.angle * Math.PI) / 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={tab.name}
                  className={cn(
                    "absolute z-40 flex items-center",
                    "transition-colors duration-200"
                  )}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    x,
                    y,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      delay: index * 0.05,
                    },
                  }}
                  exit={{
                    scale: 0,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.2, delay: index * 0.05 },
                  }}
                  onClick={() => handleTabClick(tab.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Button content */}
                  <div
                    className={cn(
                      "relative group flex items-center",
                      "transition-all duration-200"
                    )}
                  >
                    {/* Icon button */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        tab.color,
                        "shadow-lg",
                        isActive && "ring-2 ring-white"
                      )}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Label */}
                    <div
                      className={cn(
                        "absolute left-full ml-2 px-3 py-1 rounded-full",
                        "bg-white/90 backdrop-blur-sm shadow-sm",
                        "opacity-0 group-hover:opacity-100 transition-opacity",
                        "whitespace-nowrap text-sm font-medium"
                      )}
                    >
                      {tab.label}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingPublicationsNav;
