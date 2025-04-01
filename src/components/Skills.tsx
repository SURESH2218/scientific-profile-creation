import React from "react";
import {
  Beaker,
  FlaskConical,
  Cog,
  FileSearch,
  CircleDashed,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SkillType {
  id: string;
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: SkillType[] = [
    {
      id: "organic-synthesis",
      name: "Organic Synthesis",
      level: 95,
      category: "synthesis",
      icon: <Beaker className="h-4 w-4" />,
    },
    {
      id: "lipid-design",
      name: "Novel Lipid Design",
      level: 92,
      category: "synthesis",
      icon: <Beaker className="h-4 w-4" />,
    },
    {
      id: "medicinal-chem",
      name: "Medicinal Chemistry",
      level: 90,
      category: "synthesis",
      icon: <FlaskConical className="h-4 w-4" />,
    },
    {
      id: "peptide-design",
      name: "Peptidomimetic Design",
      level: 87,
      category: "synthesis",
      icon: <FlaskConical className="h-4 w-4" />,
    },
    {
      id: "air-sensitive",
      name: "Air-Sensitive Reactions",
      level: 85,
      category: "techniques",
      icon: <CircleDashed className="h-4 w-4" />,
    },
    {
      id: "high-pressure",
      name: "High-Pressure Reactions",
      level: 82,
      category: "techniques",
      icon: <CircleDashed className="h-4 w-4" />,
    },
    {
      id: "nmr",
      name: "NMR Spectroscopy",
      level: 88,
      category: "analytical",
      icon: <Cog className="h-4 w-4" />,
    },
    {
      id: "hplc",
      name: "HPLC Analysis",
      level: 86,
      category: "analytical",
      icon: <Cog className="h-4 w-4" />,
    },
    {
      id: "scifinder",
      name: "SciFinder",
      level: 89,
      category: "software",
      icon: <FileSearch className="h-4 w-4" />,
    },
    {
      id: "reaxys",
      name: "Reaxys",
      level: 84,
      category: "software",
      icon: <FileSearch className="h-4 w-4" />,
    },
  ];

  const categories = [
    {
      id: "synthesis",
      name: "Synthesis",
      icon: <Beaker className="h-4 w-4" />,
    },
    {
      id: "techniques",
      name: "Techniques",
      icon: <Wrench className="h-4 w-4" />,
    },
    { id: "analytical", name: "Analytical", icon: <Cog className="h-4 w-4" /> },
    {
      id: "software",
      name: "Software",
      icon: <FileSearch className="h-4 w-4" />,
    },
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "from-purple-600 to-indigo-500";
    if (level >= 85) return "from-blue-500 to-indigo-400";
    return "from-indigo-400 to-blue-300";
  };

  return (
    <div className="section-reveal py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
          <Wrench className="h-4 w-4 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold">Skills & Expertise</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className=" border-purple-600/20 overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-purple-600/10 to-indigo-500/5">
              <CardTitle className="flex items-center text-lg text-purple-600">
                <div className="h-6 w-6 rounded-full bg-purple-600/20 flex items-center justify-center mr-2">
                  {category.icon}
                </div>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="space-y-2 p-3 rounded-lg bg-purple-50/50 dark:bg-purple-950/10 border border-purple-100/50 dark:border-purple-800/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-purple-600 mr-2">
                            {skill.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        {/* <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-2 py-0.5 rounded-full">
                          {skill.level}%
                        </span> */}
                      </div>
                      {/* <div className="h-2 w-full rounded-full bg-gray-200/50 overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8  dark:from-purple-950/10 dark:to-indigo-900/10 p-6 rounded-lg backdrop-blur-sm border border-purple-200 dark:border-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">
          Laboratory Capabilities
        </h3>

        <div className="flex flex-wrap gap-3">
          <div className="lab-capability">
            Milligram to kilogram scale reactions
          </div>
          <div className="lab-capability">Air sensitive organic reagents</div>
          <div className="lab-capability">
            High-pressure reactions (Autoclave)
          </div>
          <div className="lab-capability">Bruker NMR</div>
          <div className="lab-capability">FT-IR Spectroscopy</div>
          <div className="lab-capability">LCMS/HPLC</div>
          <div className="lab-capability">Flash column chromatography</div>
          <div className="lab-capability">Biotage purification</div>
          <div className="lab-capability">Isolera purification</div>
          <div className="lab-capability">HPLC purification</div>
          <div className="lab-capability">Crystallization</div>
          <div className="lab-capability">Vacuum distillation</div>
          <div className="lab-capability">SciFinder</div>
          <div className="lab-capability">Reaxys</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
