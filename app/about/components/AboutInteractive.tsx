'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import CompanyStorySection from './CompanyStorySection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';

interface AboutInteractiveProps {
  className?: string;
}

const AboutInteractive = ({ className = '' }: AboutInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <div className="animate-pulse">
          <div className="h-screen bg-surface/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <CompanyStorySection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default AboutInteractive;