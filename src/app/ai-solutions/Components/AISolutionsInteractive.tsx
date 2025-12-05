'use client';

import React from 'react';
import HeroSection from './HeroSection';
import LiveDemoSection from './LiveDemoSection';
import FlowDiagramSection from './FlowDiagramSection';
import IntegrationSection from './IntegrationSection';
import TechnicalSpecsSection from './TechnicalSpecsSection';
import ROICalculatorSection from './ROICalculatorSection';
import CaseStudiesSection from './CaseStudiesSection';

interface AISolutionsInteractiveProps {
  className?: string;
}

const AISolutionsInteractive = ({ className = '' }: AISolutionsInteractiveProps) => {
  return (
    <div className={className}>
      <HeroSection />
      <LiveDemoSection />
      <FlowDiagramSection />
      <IntegrationSection />
      <TechnicalSpecsSection />
      <ROICalculatorSection />
      <CaseStudiesSection />
    </div>
  );
};

export default AISolutionsInteractive;