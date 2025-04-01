import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

// interface WorkExperienceSummaryProps {
//   onViewFull: () => void;
// }

const WorkExperienceSummary: React.FC = () => {
  const scrollToWorkExperience = () => {
    const workExperienceSection = document.getElementById(
      "work-experience-section"
    );
    if (workExperienceSection) {
      workExperienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex items-center mb-4 relative">
        <div className="absolute top-0 right-0 bg-gradient-to-br from-accent to-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
          17+ Years
        </div>
        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
          <Briefcase className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Work Experience</h2>
      </div>

      <div className="bg-white border-gray-300 border p-4 rounded-lg overflow-hidden relative">
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">
                Associate Principal Scientist
              </h3>
              <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20 text-xs">
                Current
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              NanoVation Therapeutics Inc.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">
                Senior Synthetic Chemist
              </h3>
              <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20 text-xs">
                2021-2022
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              NanoVation Therapeutics Inc.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">
                Mitacs Accelerate Postdoctoral Fellow
              </h3>
              <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20 text-xs">
                2019-2021
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              University of British Columbia
            </p>
          </div>

          <Button
            variant="link"
            className="w-full  text-foreground hover:text-purple-600 transition-all duration-300"
            onClick={scrollToWorkExperience}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            View Full Experience
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSummary;
