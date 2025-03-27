import React from "react";
import { FileText, BookOpen, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BookNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BookNav: React.FC<BookNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      name: "publications",
      icon: FileText,
      label: "Publications",
      color: "bg-violet-500",
      gradient: "from-violet-500 to-indigo-500",
      count: "15+",
    },
    {
      name: "patents",
      icon: BookOpen,
      label: "Patents",
      color: "bg-emerald-500",
      gradient: "from-emerald-500 to-teal-500",
      count: "3",
    },
    {
      name: "awards",
      icon: Award,
      label: "Awards",
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-500",
      count: "Coming Soon",
    },
    {
      name: "conferences",
      icon: Users,
      label: "Conferences",
      color: "bg-rose-500",
      gradient: "from-rose-500 to-pink-500",
      count: "Coming Soon",
    },
  ];

  return (
    <div className="relative w-full h-[160px] overflow-hidden rounded-xl bg-black/5 border border-white/10">
      <div className="absolute top-3 left-4 text-sm font-medium text-white/70">
        Scientific Profile Sections
      </div>

      <div className="relative w-full h-full flex items-center justify-center gap-4 px-4 pt-4">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;

          return (
            <motion.div
              key={tab.name}
              className={cn(
                "relative w-[100px] h-[120px] rounded-lg overflow-hidden",
                "cursor-pointer group",
                isActive && "ring-2 ring-white/20"
              )}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab(tab.name)}
            >
              {/* Book Cover */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  tab.gradient,
                  "shadow-lg"
                )}
              >
                {/* Book Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-black/20" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center gap-2 p-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg",
                      "flex items-center justify-center",
                      "bg-white/10 backdrop-blur-sm"
                    )}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-white leading-tight">
                      {tab.label}
                    </div>
                    <div className="text-xs text-white/90 font-medium mt-0.5">
                      {tab.count}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.2 }}
              />

              {/* Page Effect */}
              <div className="absolute right-0 top-1 bottom-1 w-[1px] bg-white/20 shadow-[2px_0_3px_rgba(0,0,0,0.1)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BookNav;
