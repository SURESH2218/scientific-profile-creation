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
      count: "Coming Soon",
    },
    {
      name: "conferences",
      icon: Users,
      label: "Conferences",
      color: "from-rose-500 to-pink-500",
      count: "Coming Soon",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-center gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className="relative group"
            >
              {/* Main Tab Container */}
              <div
                className={cn(
                  "relative px-6 py-3 rounded-xl transition-all duration-300",
                  "flex items-center gap-3",
                  "bg-white/5 hover:bg-white/10",
                  "border border-white/10",
                  isActive && "bg-white/15"
                )}
              >
                {/* Icon Container */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-gradient-to-br",
                    tab.color,
                    "transition-transform duration-300",
                    "group-hover:scale-110",
                    isActive && "scale-110"
                  )}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Text Content */}
                <div className="text-left">
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
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-20",
                  "rounded-xl blur-xl transition-opacity duration-300",
                  "bg-gradient-to-r",
                  tab.color
                )}
              />
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
