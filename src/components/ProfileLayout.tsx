
import React, { useEffect, useRef } from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.section-reveal').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-reveal').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="mesh-background min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
