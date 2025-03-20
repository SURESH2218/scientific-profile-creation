
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Share2, MessageSquare, Users, Heart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileHeader: React.FC = () => {
  return (
    <div className="section-reveal w-full py-6 md:py-12 flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden premium-glass p-1">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
            <Avatar className="w-full h-full">
              <AvatarImage src="/profile-prasad.jpg" alt="Dr. N. D. Prasad Atmuri" className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-3xl font-bold text-gray-500">
                NDP
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <div className="text-white text-xs font-bold">Ph.D</div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-none hover:from-indigo-600 hover:to-blue-600 px-2 py-1">Medicinal Chemist</Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-none hover:from-blue-600 hover:to-teal-600 px-2 py-1">Drug Delivery Systems</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">N. D. Prasad Atmuri, Ph.D.</h1>
          <h2 className="text-lg md:text-xl text-muted-foreground">Medicinal Chemist specializing in lipid synthesis and drug delivery systems</h2>
        </div>
        
        <p className="text-base md:text-lg max-w-3xl neo-glass p-4 rounded-xl">
          Over seventeen years of experience working in synthetic chemistry labs as a medicinal chemist and team leader, with extensive understanding and knowledge in the synthesis of a broad spectrum of lipid architectures, nucleotides (mRNA caps), and small molecules to enable a wide variety of therapeutic applications.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="relative overflow-hidden group bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500/90 text-white border-none shadow-md transition-all duration-300">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Connect</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send a connection request</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="neo-glass text-foreground hover:bg-white/10 transition-all duration-300">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Follow</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow to receive updates</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="neo-glass text-foreground hover:bg-white/10 transition-all duration-300">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Request Collaboration</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Propose a research collaboration</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 neo-glass text-foreground hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
