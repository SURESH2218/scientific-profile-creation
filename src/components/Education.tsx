
import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Education: React.FC = () => {
  return (
    <div className="section-reveal py-8">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
          <GraduationCap className="h-4 w-4 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Education & Certifications</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="premium-glass overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-br from-accent to-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
            Doctoral
          </div>
          <CardHeader>
            <CardTitle>Ph.D. in Organic and Medicinal Chemistry</CardTitle>
            <CardDescription>
              Université de Montréal, Montréal, QC, Canada
              <div className="mt-1 text-sm">01/2015 - 03/2019</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Research Director:</div>
              <div className="text-sm">Professor William D. Lubell</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Thesis Title:</div>
              <div className="text-sm mb-2">"Design, synthesis and biological applications of azabicycloalkanone amino acid peptidomimetics"</div>
              <a 
                href="https://papyrus.bib.umontreal.ca/xmlui/handle/1866/22629" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="premium-glass overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-teal-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
            Master's
          </div>
          <CardHeader>
            <CardTitle>M.Sc. in Organic Chemistry</CardTitle>
            <CardDescription>
              Université de Montréal, Montréal, QC, Canada
              <div className="mt-1 text-sm">01/2013 - 12/2014</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Research Director:</div>
              <div className="text-sm">Professor William D. Lubell</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Thesis Title:</div>
              <div className="text-sm mb-2">"Azabicycloalkanone synthesis by Transannular Cyclization"</div>
              <a 
                href="https://papyrus.bib.umontreal.ca/xmlui/handle/1866/12518" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glass">
          <CardHeader>
            <CardTitle className="text-lg">M.Sc. in Organic Chemistry</CardTitle>
            <CardDescription>
              Nagarjuna University, India
              <div className="mt-1 text-sm">05/2004 - 04/2006</div>
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="neo-glass">
          <CardHeader>
            <CardTitle className="text-lg">B.Sc. in Chemistry</CardTitle>
            <CardDescription>
              Nagarjuna University, India
              <div className="mt-1 text-sm">05/2001 - 04/2004</div>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Certifications & Training</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="neo-glass">
          <CardHeader>
            <CardTitle className="text-lg">Molecular Modeling Courses</CardTitle>
            <CardDescription>Schrödinger, Inc. (2022)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20">
              Introduction to Molecular Modeling in Drug Discovery
            </Badge>
            <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20">
              High-Throughput Virtual Screening for Hit Finding and Evaluation
            </Badge>
          </CardContent>
        </Card>
        
        <Card className="neo-glass">
          <CardHeader>
            <CardTitle className="text-lg">Business Analysis Certification</CardTitle>
            <CardDescription>Sauder School of Business, UBC (2023)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20">
              Business Analysis Fundamentals
            </Badge>
            <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20">
              Business Analysis Planning and Project Management
            </Badge>
            <Badge className="bg-white/10 backdrop-blur-sm text-foreground hover:bg-white/20">
              Business Analysis Effective Communication
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
