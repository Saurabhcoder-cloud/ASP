'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import MetricsSection from './MetricsSection';
import ServicesExplorer from './ServicesExplorer';
import AIDemo from './AIDemo';
import CTASection from './CTASection';

interface HomepageInteractiveProps {
  className?: string;
}

const HomepageInteractive = ({ className = '' }: HomepageInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <div className="animate-pulse">
          <div className="h-screen bg-surface/20"></div>
          <div className="h-96 bg-card/20"></div>
          <div className="h-96 bg-surface/20"></div>
          <div className="h-96 bg-card/20"></div>
          <div className="h-64 bg-surface/20"></div>
        </div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <MetricsSection />
      <ServicesExplorer />
      <AIDemo />
      <CTASection />
    </main>
  );
};

export default HomepageInteractive;