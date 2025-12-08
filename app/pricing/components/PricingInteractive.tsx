'use client';

import React from 'react';
import PricingPlans from './PricingPlans';
import ROICalculator from './ROICalculator';
import AddOnConfigurator from './AddOnConfigurator';
import ComparisonMatrix from './ComparisonMatrix';
import EnterpriseConsultation from './EnterpriseConsultation';
import PricingFAQ from './PricingFAQ';

interface PricingInteractiveProps {
  className?: string;
}

const PricingInteractive = ({ className = '' }: PricingInteractiveProps) => {
  return (
    <div className={className}>
      <PricingPlans />
      <ROICalculator />
      <AddOnConfigurator />
      <ComparisonMatrix />
      <EnterpriseConsultation />
      <PricingFAQ />
    </div>
  );
};

export default PricingInteractive;