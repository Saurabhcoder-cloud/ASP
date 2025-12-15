'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  monthlyRevenue: number;
  leadConversionRate: number;
  averageOrderValue: number;
  currentLeadGenCost: number;
}

interface ROIResults {
  additionalLeads: number;
  additionalRevenue: number;
  costSavings: number;
  totalROI: number;
  roiPercentage: number;
}

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator = ({ className = '' }: ROICalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyRevenue: 50000,
    leadConversionRate: 3,
    averageOrderValue: 500,
    currentLeadGenCost: 2000
  });
  const [results, setResults] = useState<ROIResults>({
    additionalLeads: 0,
    additionalRevenue: 0,
    costSavings: 0,
    totalROI: 0,
    roiPercentage: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    // Calculate ROI based on inputs
    const leadIncrease = 0.4; // 40% increase in leads
    const conversionImprovement = 0.25; // 25% improvement in conversion
    const costReduction = 0.3; // 30% reduction in lead gen costs
    
    const currentLeads = inputs.monthlyRevenue / inputs.averageOrderValue;
    const additionalLeads = Math.round(currentLeads * leadIncrease);
    const improvedConversionRate = inputs.leadConversionRate * (1 + conversionImprovement);
    const additionalRevenue = additionalLeads * (improvedConversionRate / 100) * inputs.averageOrderValue;
    const costSavings = inputs.currentLeadGenCost * costReduction;
    const totalROI = additionalRevenue + costSavings;
    const roiPercentage = ((totalROI - 7500) / 7500) * 100; // Assuming Professional plan

    setResults({
      additionalLeads,
      additionalRevenue: Math.round(additionalRevenue),
      costSavings: Math.round(costSavings),
      totalROI: Math.round(totalROI),
      roiPercentage: Math.round(roiPercentage)
    });
  }, [inputs, isHydrated]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    if (!isHydrated) return;
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphism rounded-2xl p-8 lg:p-12">
            <div className="animate-pulse">
              <div className="h-8 bg-surface rounded mb-4"></div>
              <div className="h-4 bg-surface rounded mb-8"></div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-20 bg-surface rounded"></div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-16 bg-surface rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-2xl p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="CalculatorIcon" size={16} className="text-accent mr-2" />
              <span className="text-sm font-medium text-accent">ROI Calculator</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              Calculate Your Growth Potential
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how our AI solutions can transform your business metrics and drive measurable ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl text-foreground mb-6">
                Your Current Metrics
              </h3>

              {/* Monthly Revenue */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    $
                  </span>
                  <input
                    type="number"
                    value={inputs.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="50,000"
                  />
                </div>
              </div>

              {/* Lead Conversion Rate */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Lead Conversion Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.leadConversionRate}
                    onChange={(e) => handleInputChange('leadConversionRate', Number(e.target.value))}
                    className="w-full pr-8 pl-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="3.0"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    %
                  </span>
                </div>
              </div>

              {/* Average Order Value */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Order Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    $
                  </span>
                  <input
                    type="number"
                    value={inputs.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>

              {/* Current Lead Gen Cost */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly Lead Generation Cost
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                    $
                  </span>
                  <input
                    type="number"
                    value={inputs.currentLeadGenCost}
                    onChange={(e) => handleInputChange('currentLeadGenCost', Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="2,000"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl text-foreground mb-6">
                Projected Results with ASP Global
              </h3>

              {/* Results Cards */}
              <div className="space-y-4">
                <div className="bg-surface/50 border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">Additional Monthly Leads</p>
                      <p className="font-heading text-2xl text-success">
                        +{results.additionalLeads.toLocaleString()}
                      </p>
                    </div>
                    <Icon name="TrendingUpIcon" size={24} className="text-success" />
                  </div>
                </div>

                <div className="bg-surface/50 border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">Additional Monthly Revenue</p>
                      <p className="font-heading text-2xl text-primary">
                        ${results.additionalRevenue.toLocaleString()}
                      </p>
                    </div>
                    <Icon name="CurrencyDollarIcon" size={24} className="text-primary" />
                  </div>
                </div>

                <div className="bg-surface/50 border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">Monthly Cost Savings</p>
                      <p className="font-heading text-2xl text-accent">
                        ${results.costSavings.toLocaleString()}
                      </p>
                    </div>
                    <Icon name="BanknotesIcon" size={24} className="text-accent" />
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-primary">Total Monthly ROI</p>
                      <p className="font-heading text-3xl text-primary">
                        ${results.totalROI.toLocaleString()}
                      </p>
                      <p className="text-sm text-primary">
                        {results.roiPercentage > 0 ? '+' : ''}{results.roiPercentage}% ROI
                      </p>
                    </div>
                    <Icon name="ChartBarIcon" size={32} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-border">
                <button className="w-full py-3 px-6 bg-primary text-primary-foreground font-heading rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                  Get Your Custom ROI Analysis
                </button>
                <p className="text-xs text-text-secondary text-center mt-2">
                  Results based on industry averages and client success data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;