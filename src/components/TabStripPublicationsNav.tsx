import React from "react";
import { FileText, BookOpen, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabStripPublicationsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabStripPublicationsNav: React.FC<TabStripPublicationsNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    {
      name: "publications",
      icon: FileText,
      label: "Publications",
      color: "from-violet-500 to-indigo-500",
      count: "15+",
    },
    {
      name: "patents",
      icon: BookOpen,
      label: "Patents",
      color: "from-emerald-500 to-teal-500",
      count: "3",
    },
    {
      name: "awards",
      icon: Award,
      label: "Awards",
      color: "from-amber-500 to-orange-500",
      count: "",
    },
    {
      name: "conferences",
      icon: Users,
      label: "Conferences",
      color: "from-rose-500 to-pink-500",
      count: "",
    },
    {
      name: "fun",
      icon: Users,
      label: "Fun",
      color: "from-blue-500 to-purple-500",
      count: "",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-[-35px]">
      <div className="flex items-center justify-center gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className="relative group hover:bg-transparent focus:bg-transparent active:bg-transparent"
            >
              {/* Main Tab Container */}
              <div
                className={cn(
                  "relative px-6 py-3 rounded-xl z-10",
                  "flex items-center gap-3",
                  isActive ? "bg-white/15" : "bg-transparent",
                  "hover:bg-white/5",
                  "border border-white/10",
                  "transition-all duration-300"
                )}
              >
                {/* Icon Container */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-gradient-to-br",
                    tab.color,
                    "transition-transform duration-300",
                    isActive && "scale-110"
                  )}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Text Content */}
                <div className="text-left hover:bg-transparent">
                  <div className="font-medium text-sm">{tab.label}</div>
                  <div className="text-xs opacity-60">{tab.count}</div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={cn(
                      "absolute -bottom-px left-0 right-0 h-0.5",
                      "bg-gradient-to-r",
                      tab.color
                    )}
                    initial={false}
                  />
                )}
              </div>

              {/* Hover Glow Effect */}
              <div />
            </button>
          );
        })}
      </div>

      {/* Decorative Background Line */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default TabStripPublicationsNav;
