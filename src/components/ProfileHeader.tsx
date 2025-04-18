import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Share2,
  MessageSquare,
  Users,
  Heart,
  Award,
  TrendingUp,
  Star,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileHeader: React.FC = () => {
  const scrollToEducation = () => {
    const educationSection = document.getElementById("education-section");
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-reveal w-full py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Container - contains Avatar, Main Content, and Action Buttons */}
      <div className="col-span-1 md:col-span-8 space-y-6">
        {/* Top sections wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          {/* Avatar Section */}
          <div className="relative col-span-1 md:col-span-2 flex flex-col items-center gap-4">
            <div
              className="relative w-48 h-48 md:w-52 md:h-52 overflow-hidden"
              style={{
                borderRadius: "0px 70px 0px 70px",
                backdropFilter: "blur(9px)",
                boxShadow: "0 10px 10px 0px rgba(31, 38, 135, 0.37)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <div className="w-full h-full overflow-hidden backdrop-blur-sm border border-white/30">
                <Avatar className="w-full h-full !rounded-none">
                  <AvatarImage
                    src="/profile-prasad.jpg"
                    alt="Dr. N. D. Prasad Atmuri"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-purple-200 to-violet-300 flex items-center justify-center text-3xl font-bold text-violet-700">
                    NDP
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
                <div className="text-white text-xs font-bold">Ph.D</div>
              </div> */}
            </div>

            {/* Impact Score Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="px-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center gap-3 hover:bg-white/10 transition-all">
                      <Award className="h-5 w-5 text-white" />
                      <div className="flex flex-col items-start">
                        <span className="text-[11px] text-white/80">
                          Impact Score
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-white">
                            782
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white/95 backdrop-blur-sm border-none shadow-xl p-3 rounded-xl"
                >
                  <div className="space-y-3 min-w-[180px]">
                    <div className="pb-2 border-b border-gray-100">
                      <div className="text-xs text-purple-600 font-medium">
                        Top 5% in Medicinal Chemistry
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Publications
                        </span>
                        <span className="text-xs font-semibold">312</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Research</span>
                        <span className="text-xs font-semibold">215</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Community</span>
                        <span className="text-xs font-semibold">176</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Activity</span>
                        <span className="text-xs font-semibold">79</span>
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Main Content Section */}
          <div className="col-span-1 md:col-span-6 space-y-3 md:space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-none hover:from-indigo-600 hover:to-blue-600 px-2 py-1">
                  Medicinal Chemist
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-none hover:from-blue-600 hover:to-teal-600 px-2 py-1">
                  Drug Delivery Systems
                </Badge>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  N. D. Prasad Atmuri, Ph.D.
                </h1>
                <Badge className="ml-2 bg-purple-600 text-white border-none">
                  Verified
                </Badge>
              </div>
              {/* <div className="flex flex-wrap items-center gap-2">
                <Badge className=" text-white border-none hover:from-indigo-600 hover:to-blue-600 px-2 py-1">Medicinal Chemist</Badge>
                <Badge className=" text-white border-none hover:from-blue-600 hover:to-teal-600 px-2 py-1">Drug Delivery Systems</Badge>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-black">N. D. Prasad Atmuri, Ph.D.</h1>
                <Badge className="ml-2 bg-purple-600 text-white border-none">Verified</Badge>
              </div> */}
              <h2 className="text-base md:text-lg text-muted-foreground font-semibold">
                Medicinal Chemist specializing in lipid synthesis and drug
                delivery systems
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-3 rounded-lg border border-purple-100 dark:border-purple-800/30">
              <div className="flex justify-end">
                <p className="text-md bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 mb-2 rounded-full">
                  Overview
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                Over seventeen years of experience working in synthetic
                chemistry labs as a medicinal chemist and team leader, with
                extensive understanding and knowledge in the synthesis of a
                broad spectrum of lipid architectures, nucleotides (mRNA caps),
                and small molecules to enable a wide variety of therapeutic
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-wrap gap-3 ml-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white hover:text-white border-none shadow-md transition-all duration-300">
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
                <Button
                  variant="outline"
                  className="neo-glass text-foreground hover:bg-purple-600/10 hover:text-purple-600 transition-all duration-300"
                >
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
                <Button
                  variant="outline"
                  className="neo-glass text-foreground hover:bg-purple-600/10 hover:text-purple-600 transition-all duration-300"
                >
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 neo-glass text-foreground hover:bg-purple-600/10 hover:text-purple-600"
                >
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

      {/* Education Summary Section - spans 4 columns on desktop */}
      <div className="col-span-1 md:col-span-4 space-y-3 md:space-y-4">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
            <GraduationCap className="h-4 w-4 text-accent" />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <div className="bg-white shadow-xs border border-gray-200 p-4 rounded-xl overflow-hidden relative">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-sm">
                    Ph.D. in Organic and Medicinal Chemistry
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Université de Montréal, Canada
                  </p>
                </div>
                <p className="text-xs font-bold">2015 - 2019</p>
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium">Research Director:</p>
                <p className="text-xs">Professor William D. Lubell</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-sm">
                    M.Sc. in Organic Chemistry
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Université de Montréal, Canada
                  </p>
                </div>
                <p className="text-xs font-bold">2013 - 2014</p>
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium">Research Director:</p>
                <p className="text-xs">Professor William D. Lubell</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-sm">B.Sc. in Chemistry</h3>
                  <p className="text-xs text-muted-foreground">
                    Nagarjuna University, India
                  </p>
                </div>
                <p className="text-xs font-bold">2001 - 2004</p>
              </div>
            </div>

            <Button
              variant="link"
              className="w-full text-foreground hover:text-purple-600 transition-all duration-300"
              onClick={scrollToEducation}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              View More Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
