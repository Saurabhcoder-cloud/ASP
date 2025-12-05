'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  monthlyCallVolume: number;
  averageCallDuration: number;
  agentHourlyRate: number;
  currentConversionRate: number;
  averageDealValue: number;
}

interface ROIResults {
  monthlySavings: number;
  yearlyROI: number;
  additionalRevenue: number;
  paybackPeriod: number;
}

interface ROICalculatorSectionProps {
  className?: string;
}

const ROICalculatorSection = ({ className = '' }: ROICalculatorSectionProps) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyCallVolume: 1000,
    averageCallDuration: 15,
    agentHourlyRate: 25,
    currentConversionRate: 15,
    averageDealValue: 500
  });

  const [results, setResults] = useState<ROIResults>({
    monthlySavings: 0,
    yearlyROI: 0,
    additionalRevenue: 0,
    paybackPeriod: 0
  });

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    // Calculate ROI based on inputs
    const monthlyCallHours = (inputs.monthlyCallVolume * inputs.averageCallDuration) / 60;
    const currentMonthlyCost = monthlyCallHours * inputs.agentHourlyRate;
    
    // AI efficiency assumptions
    const aiCostPerCall = 0.15; // $0.15 per AI call
    const aiMonthlyCost = inputs.monthlyCallVolume * aiCostPerCall;
    const monthlySavings = currentMonthlyCost - aiMonthlyCost;
    
    // Conversion improvement with AI (typically 20-30% improvement)
    const improvedConversionRate = inputs.currentConversionRate * 1.25;
    const additionalConversions = inputs.monthlyCallVolume * (improvedConversionRate - inputs.currentConversionRate) / 100;
    const additionalRevenue = additionalConversions * inputs.averageDealValue;
    
    // Total monthly benefit
    const totalMonthlyBenefit = monthlySavings + additionalRevenue;
    const yearlyROI = (totalMonthlyBenefit * 12) / (aiMonthlyCost * 12) * 100;
    
    // Payback period (assuming $5000 setup cost)
    const setupCost = 5000;
    const paybackPeriod = setupCost / totalMonthlyBenefit;

    setResults({
      monthlySavings: Math.max(0, monthlySavings),
      yearlyROI: Math.max(0, yearlyROI),
      additionalRevenue: Math.max(0, additionalRevenue),
      paybackPeriod: Math.max(0, paybackPeriod)
    });
  }, [inputs, isHydrated]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${Math.round(value)}%`;
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-32 bg-surface ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="h-96 bg-muted rounded-xl"></div>
              <div className="h-96 bg-muted rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-32 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-accent/30 mb-6">
            <Icon name="CalculatorIcon" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">ROI Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Calculate Your AI Investment Return
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            See the potential cost savings and revenue increase from implementing our AI solutions. 
            Adjust the parameters below to match your business scenario.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="glassmorphism rounded-2xl p-8 border border-border/50">
            <h3 className="font-heading text-xl text-foreground mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly Call Volume
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.monthlyCallVolume}
                    onChange={(e) => handleInputChange('monthlyCallVolume', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="1000"
                  />
                  <div className="absolute right-3 top-3 text-text-secondary text-sm">calls</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Call Duration
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.averageCallDuration}
                    onChange={(e) => handleInputChange('averageCallDuration', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="15"
                  />
                  <div className="absolute right-3 top-3 text-text-secondary text-sm">minutes</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Agent Hourly Rate
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-text-secondary text-sm">$</div>
                  <input
                    type="number"
                    value={inputs.agentHourlyRate}
                    onChange={(e) => handleInputChange('agentHourlyRate', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="25"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Conversion Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={inputs.currentConversionRate}
                    onChange={(e) => handleInputChange('currentConversionRate', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="15"
                  />
                  <div className="absolute right-3 top-3 text-text-secondary text-sm">%</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Deal Value
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-text-secondary text-sm">$</div>
                  <input
                    type="number"
                    value={inputs.averageDealValue}
                    onChange={(e) => handleInputChange('averageDealValue', parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-8 border border-border/50">
              <h3 className="font-heading text-xl text-foreground mb-6">Your ROI Projection</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-success/10 rounded-xl border border-success/20">
                  <div className="text-2xl font-display text-success mb-1">
                    {formatCurrency(results.monthlySavings)}
                  </div>
                  <div className="text-sm text-text-secondary">Monthly Savings</div>
                </div>

                <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="text-2xl font-display text-primary mb-1">
                    {formatPercentage(results.yearlyROI)}
                  </div>
                  <div className="text-sm text-text-secondary">Yearly ROI</div>
                </div>

                <div className="text-center p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="text-2xl font-display text-accent mb-1">
                    {formatCurrency(results.additionalRevenue)}
                  </div>
                  <div className="text-sm text-text-secondary">Additional Revenue</div>
                </div>

                <div className="text-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <div className="text-2xl font-display text-secondary mb-1">
                    {results.paybackPeriod.toFixed(1)}
                  </div>
                  <div className="text-sm text-text-secondary">Months to Payback</div>
                </div>
              </div>
            </div>

            {/* Benefits Breakdown */}
            <div className="glassmorphism rounded-2xl p-8 border border-border/50">
              <h4 className="font-heading text-lg text-foreground mb-4">How We Calculate Your Savings</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="ClockIcon" size={16} className="text-success" />
                    <span className="text-sm text-foreground">Reduced Call Handling Time</span>
                  </div>
                  <span className="text-sm font-medium text-success">60% faster</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="TrendingUpIcon" size={16} className="text-primary" />
                    <span className="text-sm text-foreground">Improved Conversion Rate</span>
                  </div>
                  <span className="text-sm font-medium text-primary">+25% increase</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="UserGroupIcon" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">24/7 Availability</span>
                  </div>
                  <span className="text-sm font-medium text-accent">No overtime costs</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="ChartBarIcon" size={16} className="text-secondary" />
                    <span className="text-sm text-foreground">Consistent Performance</span>
                  </div>
                  <span className="text-sm font-medium text-secondary">Zero sick days</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                <Icon name="CalendarDaysIcon" size={20} className="mr-3" />
                Schedule ROI Consultation
              </button>
              <p className="text-xs text-text-secondary mt-2">
                Get a personalized ROI analysis for your specific business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;