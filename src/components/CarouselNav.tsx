import React, { useState } from "react";
import {
  FileText,
  BookOpen,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CarouselNav: React.FC<CarouselNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

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

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const handleDrag = (_: never, info: PanInfo) => {
    const sensitivity = 0.5;
    const newAngle = rotationAngle + info.delta.x * sensitivity;
    setRotationAngle(newAngle);

    // Calculate which item should be active based on rotation
    const itemAngle = 360 / tabs.length;
    const normalizedAngle = ((newAngle % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedAngle / itemAngle) % tabs.length;
    if (!isDragging) {
      setActiveTab(tabs[activeIndex].name);
    }
  };

  const handleTabClick = (tabName: string) => {
    const targetIndex = tabs.findIndex((tab) => tab.name === tabName);
    const itemAngle = 360 / tabs.length;
    setRotationAngle(targetIndex * -itemAngle);
    setActiveTab(tabName);
  };

  return (
    <div className="relative w-full h-[160px] perspective-1000 overflow-hidden rounded-xl bg-black/5 border border-white/10">
      {/* Title */}
      <div className="absolute top-3 left-4 text-sm font-medium text-white/70">
        Scientific Profile Sections
      </div>

      {/* 3D Carousel Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Carousel Items */}
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          const itemAngle = (360 / tabs.length) * index;
          const radius = 100; // Distance from center

          return (
            <motion.div
              key={tab.name}
              className="absolute"
              animate={{
                x:
                  radius *
                  Math.cos((itemAngle + rotationAngle) * (Math.PI / 180)),
                y: 0,
                scale: isActive ? 1.1 : 0.85,
                opacity: isActive ? 1 : 0.6,
                rotateY: (itemAngle + rotationAngle) * -1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                zIndex: isActive ? 10 : 0,
              }}
              onClick={() => handleTabClick(tab.name)}
            >
              {/* Card Content */}
              <div
                className={cn(
                  "relative w-28 h-28 rounded-xl",
                  "bg-gradient-to-br",
                  tab.gradient,
                  "flex flex-col items-center justify-center gap-2",
                  "shadow-lg shadow-black/10",
                  "cursor-pointer",
                  "transition-all duration-300",
                  isActive && "ring-2 ring-white/20"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl",
                    "flex items-center justify-center",
                    "bg-white/10 backdrop-blur-sm"
                  )}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Label */}
                <div className="text-center">
                  <div className="text-sm font-bold text-white">
                    {tab.label}
                  </div>
                  <div className="text-xs text-white/90 font-medium">
                    {tab.count}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          const newAngle = rotationAngle + 360 / tabs.length;
          setRotationAngle(newAngle);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => {
          const newAngle = rotationAngle - 360 / tabs.length;
          setRotationAngle(newAngle);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default CarouselNav;
