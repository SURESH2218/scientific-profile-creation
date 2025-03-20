
import React, { useState } from 'react';
import { Beaker, FlaskConical, Cog, Wrench, ThumbsUp, FileSearch, CircleDashed } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

interface SkillType {
  id: string;
  name: string;
  level: number;
  endorsements: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillType[]>([
    { id: 'organic-synthesis', name: 'Organic Synthesis', level: 95, endorsements: 28, category: 'synthesis', icon: <Beaker className="h-4 w-4" /> },
    { id: 'lipid-design', name: 'Novel Lipid Design', level: 92, endorsements: 24, category: 'synthesis', icon: <Beaker className="h-4 w-4" /> },
    { id: 'medicinal-chem', name: 'Medicinal Chemistry', level: 90, endorsements: 22, category: 'synthesis', icon: <FlaskConical className="h-4 w-4" /> },
    { id: 'peptide-design', name: 'Peptidomimetic Design', level: 87, endorsements: 19, category: 'synthesis', icon: <FlaskConical className="h-4 w-4" /> },
    { id: 'air-sensitive', name: 'Air-Sensitive Reactions', level: 85, endorsements: 16, category: 'techniques', icon: <CircleDashed className="h-4 w-4" /> },
    { id: 'high-pressure', name: 'High-Pressure Reactions', level: 82, endorsements: 14, category: 'techniques', icon: <CircleDashed className="h-4 w-4" /> },
    { id: 'nmr', name: 'NMR Spectroscopy', level: 88, endorsements: 18, category: 'analytical', icon: <Cog className="h-4 w-4" /> },
    { id: 'hplc', name: 'HPLC Analysis', level: 86, endorsements: 15, category: 'analytical', icon: <Cog className="h-4 w-4" /> },
    { id: 'scifinder', name: 'SciFinder', level: 89, endorsements: 12, category: 'software', icon: <FileSearch className="h-4 w-4" /> },
    { id: 'reaxys', name: 'Reaxys', level: 84, endorsements: 10, category: 'software', icon: <FileSearch className="h-4 w-4" /> },
  ]);

  const handleEndorseSkill = (id: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, endorsements: skill.endorsements + 1 } : skill
    ));
    
    toast({
      title: "Skill Endorsed",
      description: "Thank you for your endorsement!",
      duration: 3000,
    });
  };

  const categories = [
    { id: 'synthesis', name: 'Synthesis', icon: <Beaker className="h-4 w-4" /> },
    { id: 'techniques', name: 'Techniques', icon: <Wrench className="h-4 w-4" /> },
    { id: 'analytical', name: 'Analytical', icon: <Cog className="h-4 w-4" /> },
    { id: 'software', name: 'Software', icon: <FileSearch className="h-4 w-4" /> },
  ];

  return (
    <div className="section-reveal py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
          <Wrench className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Skills & Expertise</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(category => (
          <Card key={category.id} className="neo-glass overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                  {category.icon}
                </div>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills
                .filter(skill => skill.category === category.id)
                .map(skill => (
                  <div key={skill.id} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {skill.icon}
                        <span className="ml-2 text-sm font-medium">{skill.name}</span>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 px-2 text-xs font-medium"
                              onClick={() => handleEndorseSkill(skill.id)}
                            >
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{skill.endorsements}</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Endorse this skill</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))
              }
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Laboratory Capabilities</h3>
        
        <div className="flex flex-wrap gap-2">
          <Badge className="skill-badge">Milligram to kilogram scale reactions</Badge>
          <Badge className="skill-badge">Air sensitive organic reagents</Badge>
          <Badge className="skill-badge">High-pressure reactions (Autoclave)</Badge>
          <Badge className="skill-badge">Bruker NMR</Badge>
          <Badge className="skill-badge">FT-IR Spectroscopy</Badge>
          <Badge className="skill-badge">LCMS/HPLC</Badge>
          <Badge className="skill-badge">Flash column chromatography</Badge>
          <Badge className="skill-badge">Biotage purification</Badge>
          <Badge className="skill-badge">Isolera purification</Badge>
          <Badge className="skill-badge">HPLC purification</Badge>
          <Badge className="skill-badge">Crystallization</Badge>
          <Badge className="skill-badge">Vacuum distillation</Badge>
          <Badge className="skill-badge">SciFinder</Badge>
          <Badge className="skill-badge">Reaxys</Badge>
        </div>
      </div>
    </div>
  );
};

export default Skills;
