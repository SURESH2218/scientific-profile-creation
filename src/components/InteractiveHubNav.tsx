import React from "react";
import { FileText, BookOpen, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveHubNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const InteractiveHubNav: React.FC<InteractiveHubNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    {
      name: "publications",
      icon: FileText,
      label: "Publications",
      color: "from-violet-500 to-indigo-500",
      position: "top",
      count: "15+",
      translateY: "-80px",
      translateX: "0",
    },
    {
      name: "patents",
      icon: BookOpen,
      label: "Patents",
      color: "from-emerald-500 to-teal-500",
      position: "right",
      count: "3",
      translateY: "0",
      translateX: "80px",
    },
    {
      name: "awards",
      icon: Award,
      label: "Awards",
      color: "from-amber-500 to-orange-500",
      position: "bottom",
      count: "Coming Soon",
      translateY: "80px",
      translateX: "0",
    },
    {
      name: "conferences",
      icon: Users,
      label: "Conferences",
      color: "from-rose-500 to-pink-500",
      position: "left",
      count: "Coming Soon",
      translateY: "0",
      translateX: "-80px",
    },
  ];

  return (
    <div className="relative w-full h-[180px] flex items-center justify-center">
      {/* Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mask: "radial-gradient(circle, transparent 25%, black 30%)" }}
      >
        {tabs.map((tab) => (
          <motion.line
            key={tab.name}
            x1="50%"
            y1="50%"
            x2={
              tab.position === "left"
                ? "35%"
                : tab.position === "right"
                ? "65%"
                : "50%"
            }
            y2={
              tab.position === "top"
                ? "15%"
                : tab.position === "bottom"
                ? "85%"
                : "50%"
            }
            strokeWidth="1"
            stroke="currentColor"
            className="connection-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: activeTab === tab.name ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Central Hub */}
      <motion.div
        className={cn(
          "absolute z-20 w-16 h-16 rounded-full",
          "bg-gradient-to-br from-accent to-accent/80",
          "flex items-center justify-center",
          "shadow-lg shadow-accent/20"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-center text-white">
          <div className="text-xs font-medium">Scientific</div>
          <div className="text-xs font-bold">Profile</div>
        </div>
      </motion.div>

      {/* Navigation Items */}
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;

        return (
          <motion.button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className="absolute z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: tab.translateX,
              y: tab.translateY,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative group">
              {/* Main Button */}
              <motion.div
                className={cn(
                  "relative w-14 h-14 rounded-xl",
                  "flex flex-col items-center justify-center gap-1",
                  "bg-white/5 backdrop-blur-sm",
                  "border border-white/10",
                  "transition-colors duration-300",
                  isActive && "bg-white/15"
                )}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon Container */}
                <div
                  className={cn(
                    "w-7 h-7 rounded-lg",
                    "flex items-center justify-center",
                    "bg-gradient-to-br",
                    tab.color
                  )}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Label */}
                <div className="text-[9px] font-medium text-center leading-none">
                  {tab.label}
                </div>

                {/* Count Badge */}
                {tab.count && (
                  <div
                    className={cn(
                      "absolute -top-1 -right-1",
                      "px-1.5 py-0.5 rounded-full text-[8px]",
                      "bg-gradient-to-r",
                      tab.color,
                      "opacity-0 group-hover:opacity-100 transition-opacity",
                      "text-white font-medium"
                    )}
                  >
                    {tab.count}
                  </div>
                )}
              </motion.div>

              {/* Connection Line Highlight */}
              {isActive && (
                <motion.div
                  layoutId="hubHighlight"
                  className={cn(
                    "absolute inset-0 -z-10",
                    "rounded-xl blur-lg opacity-20",
                    "bg-gradient-to-r",
                    tab.color
                  )}
                />
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default InteractiveHubNav;
