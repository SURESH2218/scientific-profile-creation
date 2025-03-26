
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

// interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const [endorsements, setEndorsements] = useState<Record<string, number>>({
    nanovation: 12,
    senior: 8,
    mitacs: 15,
    syngene: 7,
    hetero: 5,
  });

  const handleEndorse = (id: string) => {
    setEndorsements((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
    
    toast({
      title: "Skill Endorsed",
      description: "Thank you for your endorsement!",
      duration: 3000,
    });
  };

  return (
    <div className="section-reveal py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
          <Briefcase className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Work Experience</h2>
      </div>

      <div className="space-y-6">
        <Card className="neo-glass animate-float">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-semibold">Associate Principal Scientist</CardTitle>
                <CardDescription className="text-base font-medium">
                  NanoVation Therapeutics Inc., Vancouver, BC
                </CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-none">
                <CalendarDays className="mr-1 h-3 w-3" /> 10/2022 - Current
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc pl-5 space-y-2">
              <li>Design and synthesis of various novel lipids and mRNA caps</li>
              <li>Development of safe, stable, and effective LNP delivery systems</li>
              <li>Supervision and technical documentation for research operations</li>
            </ul>
            
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs neo-glass text-black"
                        onClick={() => handleEndorse('nanovation')}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> 
                        Vouch for Skills ({endorsements.nanovation})
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Endorse Dr. Atmuri's skills at NanoVation</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-glass">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-semibold">Senior Synthetic Chemist</CardTitle>
                <CardDescription className="text-base font-medium">
                  NanoVation Therapeutics Inc., Vancouver, BC
                </CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none">
                <CalendarDays className="mr-1 h-3 w-3" /> 10/2021 - 09/2022
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc pl-5 space-y-2">
              <li>Designing novel lipids from prior art searches, synthesis, and characterization</li>
              <li>Exploring the structural activity relationships (SAR) of diverse cationic lipids</li>
              <li>Modifying the pKa of LNPs by altering the cationic lipid structure</li>
            </ul>
            
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs neo-glass text-black"
                        onClick={() => handleEndorse('senior')}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> 
                        Vouch for Skills ({endorsements.senior})
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Endorse Dr. Atmuri's skills as Senior Chemist</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-glass">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-semibold">Mitacs Accelerate Postdoctoral Fellow</CardTitle>
                <CardDescription className="text-base font-medium">
                  University of British Columbia, BC
                </CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-blue-500 to-sky-500 text-white border-none">
                <CalendarDays className="mr-1 h-3 w-3" /> 08/2019 - 09/2021
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Research Director: Professor Marco A. Ciufolini</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Design and Synthesis of cathepsin k protein inhibitors (Azatanshinone analogs)</li>
              <li>Development of Angiotensin receptor blockers and ACE inhibitors</li>
            </ul>
            
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs neo-glass text-black"
                        onClick={() => handleEndorse('mitacs')}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> 
                        Vouch for Skills ({endorsements.mitacs})
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Endorse Dr. Atmuri's skills as Postdoctoral Fellow</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-4">
          <Card className="neo-glass flex-1">
            <CardHeader className="pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Associate Scientist</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Syngene International Limited, Bengaluru, India
                </CardDescription>
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none mt-1">
                  <CalendarDays className="mr-1 h-3 w-3" /> 06/2008 - 12/2012
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Design, synthesis, purification, and characterization of medicinal chemistry targets for PTC-Bio, Merck, Abbott and AstraZeneca-UK in an FTE setting.</p>
              
              <div className="flex justify-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs neo-glass text-black"
                        onClick={() => handleEndorse('syngene')}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> 
                        Vouch ({endorsements.syngene})
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Endorse Dr. Atmuri's skills at Syngene</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>

          <Card className="neo-glass flex-1">
            <CardHeader className="pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">R&D Chemist</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Hetero Drugs Limited, Hyderabad, India
                </CardDescription>
                <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-none mt-1">
                  <CalendarDays className="mr-1 h-3 w-3" /> 07/2006 - 05/2008
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Development and commercial validation of active pharmaceutical ingredient (API) processes under GMP guideline at the piolet plant level.</p>
              
              <div className="flex justify-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs neo-glass text-black"
                        onClick={() => handleEndorse('hetero')}
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> 
                        Vouch ({endorsements.hetero})
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Endorse Dr. Atmuri's skills at Hetero Drugs</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
