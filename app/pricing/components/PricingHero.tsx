import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingHeroProps {
  className?: string;
}

const PricingHero = ({ className = '' }: PricingHeroProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="CurrencyDollarIcon" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Growth Partnerships
            <span className="block text-primary">Built for Scale</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Flexible pricing architecture designed to grow with your ambition. From startup-friendly packages to enterprise transformations, find the perfect partnership model for your digital evolution.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
            <div className="flex items-center">
              <Icon name="CheckCircleIcon" size={16} className="text-success mr-2" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircleIcon" size={16} className="text-success mr-2" />
              <span>Scalable Solutions</span>
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircleIcon" size={16} className="text-success mr-2" />
              <span>Enterprise Support</span>
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircleIcon" size={16} className="text-success mr-2" />
              <span>ROI Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;