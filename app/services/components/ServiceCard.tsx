'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceFeature {
  name: string;
  description: string;
  icon: string;
}

interface ServiceIntegration {
  name: string;
  logo: string;
  alt: string;
  compatibility: 'Full' | 'Partial' | 'Custom';
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  features: ServiceFeature[];
  integrations: ServiceIntegration[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: string;
  };
  image: string;
  alt: string;
  onConsultationRequest: (serviceId: string) => void;
  onROICalculate: (serviceId: string) => void;
}

export default function ServiceCard({
  id,
  title,
  description,
  category,
  features,
  integrations,
  pricing,
  image,
  alt,
  onConsultationRequest,
  onROICalculate
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'integrations' | 'pricing'>('features');

  return (
    <div className="group relative">
      {/* Main Card */}
      <div className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 orbital-card">
        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {category}
        </div>

        {/* Service Image */}
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-text-secondary leading-relaxed">
            {description}
          </p>

          {/* Quick Features */}
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md bg-surface/50 text-text-secondary text-xs"
              >
                <Icon name={feature.icon as any} size={12} className="mr-1" />
                {feature.name}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-xs text-primary">+{features.length - 3} more</span>
            )}
          </div>

          {/* Pricing Preview */}
          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="text-sm text-text-secondary">
              Starting from <span className="text-lg font-heading text-primary">${pricing.starter}</span>/month
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 magnetic-cta"
            >
              <span className="text-sm font-medium">Learn More</span>
              <Icon 
                name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"} 
                size={16} 
                className="ml-2 transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism rounded-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 glassmorphism border-b border-border/30 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-heading text-foreground">{title}</h2>
                  <p className="text-text-secondary mt-1">{category}</p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-surface/50 rounded-lg transition-colors duration-300"
                >
                  <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 mt-6">
                {(['features', 'integrations', 'pricing'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-primary text-primary-foreground'
                        : 'text-text-secondary hover:text-foreground hover:bg-surface/50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'features' && (
                <div className="space-y-6">
                  <p className="text-text-secondary leading-relaxed">{description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-surface/30">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon name={feature.icon as any} size={16} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{feature.name}</h4>
                          <p className="text-sm text-text-secondary mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-heading text-foreground">Platform Integrations</h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrations.map((integration, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-surface/30">
                        <AppImage
                          src={integration.logo}
                          alt={integration.alt}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{integration.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            integration.compatibility === 'Full' ?'bg-success/20 text-success'
                              : integration.compatibility === 'Partial' ?'bg-warning/20 text-warning' :'bg-secondary/20 text-secondary'
                          }`}>
                            {integration.compatibility}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-surface/30 border border-border/30">
                      <h4 className="font-heading text-foreground mb-2">Starter</h4>
                      <div className="text-3xl font-heading text-primary mb-4">
                        ${pricing.starter}<span className="text-sm text-text-secondary">/month</span>
                      </div>
                      <p className="text-sm text-text-secondary">Perfect for small businesses getting started</p>
                    </div>

                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                      <h4 className="font-heading text-foreground mb-2">Professional</h4>
                      <div className="text-3xl font-heading text-primary mb-4">
                        ${pricing.professional}<span className="text-sm text-text-secondary">/month</span>
                      </div>
                      <p className="text-sm text-text-secondary">Ideal for growing companies with advanced needs</p>
                    </div>

                    <div className="p-6 rounded-xl bg-surface/30 border border-border/30">
                      <h4 className="font-heading text-foreground mb-2">Enterprise</h4>
                      <div className="text-3xl font-heading text-primary mb-4">
                        {pricing.enterprise}
                      </div>
                      <p className="text-sm text-text-secondary">Custom solutions for large organizations</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/30">
                <button
                  onClick={() => onROICalculate(id)}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-surface/50 hover:bg-surface/70 text-foreground rounded-lg transition-all duration-300"
                >
                  <Icon name="CalculatorIcon" size={20} className="mr-2" />
                  Calculate ROI
                </button>
                <button
                  onClick={() => onConsultationRequest(id)}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg magnetic-cta constellation-glow transition-all duration-300"
                >
                  <Icon name="CalendarIcon" size={20} className="mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}