import React, { useEffect, useState } from "react";
import ProfileLayout from "@/components/ProfileLayout";
import ProfileHeader from "@/components/ProfileHeader";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import ActivityFeed from "@/components/ActivityFeed";
import WorkExperienceSummary from "@/components/WorkExperienceSummary";
import WorkExperienceModal from "@/components/WorkExperienceModal";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(false);

  // Add a progressive loading animation for each section
  useEffect(() => {
    const sections = document.querySelectorAll(".section-reveal");
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("visible");
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <ProfileLayout>
      <ProfileHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <Publications />
          <Education />
          <WorkExperience />
          <Awards />
        </div>

        <div className="space-y-4">
          <WorkExperienceSummary />
          <Skills />
          <ActivityFeed />
        </div>
      </div>


      <ScrollToTop />
    </ProfileLayout>
  );
};

export default Index;
