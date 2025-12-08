'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  serviceId: string;
  serviceName: string;
  isOpen: boolean;
  onClose: () => void;
}

interface ROIInputs {
  currentRevenue: number;
  currentCosts: number;
  teamSize: number;
  timeSpent: number;
  conversionRate: number;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  roiPercentage: number;
  paybackPeriod: number;
  productivityGain: number;
}

export default function ROICalculator({ serviceId, serviceName, isOpen, onClose }: ROICalculatorProps) {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentRevenue: 100000,
    currentCosts: 25000,
    teamSize: 5,
    timeSpent: 20,
    conversionRate: 2.5
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const monthlySavings = (inputs.currentCosts * 0.3) + (inputs.teamSize * inputs.timeSpent * 50);
      const annualSavings = monthlySavings * 12;
      const investment = 5000; // Base investment cost
      const roiPercentage = ((annualSavings - investment) / investment) * 100;
      const paybackPeriod = investment / monthlySavings;
      const productivityGain = inputs.conversionRate * 15; // Estimated productivity increase

      setResults({
        monthlySavings,
        annualSavings,
        roiPercentage,
        paybackPeriod,
        productivityGain
      });
      setIsCalculating(false);
    }, 1500);
  };

  const updateInput = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setResults(null); // Reset results when inputs change
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 glassmorphism border-b border-border/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-heading text-foreground">ROI Calculator</h2>
              <p className="text-text-secondary mt-1">Calculate potential returns for {serviceName}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface/50 rounded-lg transition-colors duration-300"
            >
              <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Current Business Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => updateInput('currentRevenue', Number(e.target.value))}
                    className="w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Operating Costs ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCosts}
                    onChange={(e) => updateInput('currentCosts', Number(e.target.value))}
                    className="w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Team Size
                  </label>
                  <input
                    type="number"
                    value={inputs.teamSize}
                    onChange={(e) => updateInput('teamSize', Number(e.target.value))}
                    className="w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hours/Week on Manual Tasks
                  </label>
                  <input
                    type="number"
                    value={inputs.timeSpent}
                    onChange={(e) => updateInput('timeSpent', Number(e.target.value))}
                    className="w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.conversionRate}
                    onChange={(e) => updateInput('conversionRate', Number(e.target.value))}
                    className="w-full px-4 py-3 bg-surface/50 border border-border/30 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                <button
                  onClick={calculateROI}
                  disabled={isCalculating}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg magnetic-cta constellation-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Icon name="CalculatorIcon" size={20} className="mr-2" />
                      Calculate ROI
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading text-foreground">Projected Results</h3>
              
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                      <div className="text-2xl font-heading text-success">
                        ${results.monthlySavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">Monthly Savings</div>
                    </div>

                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="text-2xl font-heading text-primary">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">Annual Savings</div>
                    </div>

                    <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                      <div className="text-2xl font-heading text-warning">
                        {results.roiPercentage.toFixed(0)}%
                      </div>
                      <div className="text-sm text-text-secondary">ROI Percentage</div>
                    </div>

                    <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                      <div className="text-2xl font-heading text-secondary">
                        {results.paybackPeriod.toFixed(1)} mo
                      </div>
                      <div className="text-sm text-text-secondary">Payback Period</div>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-surface/30 border border-border/30">
                    <h4 className="font-heading text-foreground mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="TrendingUpIcon" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">
                          {results.productivityGain.toFixed(0)}% increase in team productivity
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="ClockIcon" size={16} className="text-primary" />
                        <span className="text-sm text-text-secondary">
                          {inputs.timeSpent * 0.7} hours/week saved per team member
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CurrencyDollarIcon" size={16} className="text-warning" />
                        <span className="text-sm text-text-secondary">
                          Break-even achieved in {results.paybackPeriod.toFixed(1)} months
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 flex items-center justify-center px-6 py-3 bg-surface/50 hover:bg-surface/70 text-foreground rounded-lg transition-all duration-300">
                      <Icon name="DocumentArrowDownIcon" size={20} className="mr-2" />
                      Download Report
                    </button>
                    <button className="flex-1 flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                      <Icon name="CalendarIcon" size={20} className="mr-2" />
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-text-secondary">
                  <div className="text-center">
                    <Icon name="CalculatorIcon" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Enter your business metrics and click "Calculate ROI" to see projected results</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}