'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
}

interface AddOnConfiguratorProps {
  className?: string;
}

const AddOnConfigurator = ({ className = '' }: AddOnConfiguratorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const addOns: AddOn[] = [
    {
      id: 'extra-chatbot',
      name: 'Additional AI Chatbot',
      description: 'Custom-trained chatbot for specific use cases',
      price: 500,
      category: 'AI Solutions',
      popular: true
    },
    {
      id: 'voice-agent',
      name: 'AI Voice Agent',
      description: 'Intelligent calling system for lead qualification',
      price: 1200,
      category: 'AI Solutions',
      popular: true
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics Dashboard',
      description: 'Deep insights with predictive analytics',
      price: 300,
      category: 'Analytics'
    },
    {
      id: 'crm-integration',
      name: 'Premium CRM Integration',
      description: 'Connect with Salesforce, HubSpot, or custom CRM',
      price: 400,
      category: 'Integrations'
    },
    {
      id: 'social-media-automation',
      name: 'Social Media Automation',
      description: 'Automated posting and engagement across platforms',
      price: 600,
      category: 'Marketing'
    },
    {
      id: 'email-sequences',
      name: 'Advanced Email Sequences',
      description: 'Behavioral-triggered email campaigns',
      price: 350,
      category: 'Marketing'
    },
    {
      id: 'priority-support',
      name: 'Priority Support',
      description: '24/7 support with 2-hour response time',
      price: 800,
      category: 'Support'
    },
    {
      id: 'custom-training',
      name: 'Team Training Program',
      description: 'Comprehensive training for your team',
      price: 1000,
      category: 'Support'
    },
    {
      id: 'white-label',
      name: 'White-Label Solution',
      description: 'Brand the platform with your company identity',
      price: 1500,
      category: 'Enterprise'
    },
    {
      id: 'api-access',
      name: 'API Access & Documentation',
      description: 'Full API access for custom integrations',
      price: 700,
      category: 'Enterprise'
    }
  ];

  const categories = ['AI Solutions', 'Analytics', 'Integrations', 'Marketing', 'Support', 'Enterprise'];

  useEffect(() => {
    if (!isHydrated) return;
    
    const total = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return sum + (addOn?.price || 0);
    }, 0);
    setTotalPrice(total);
  }, [selectedAddOns, isHydrated]);

  const toggleAddOn = (addOnId: string) => {
    if (!isHydrated) return;
    
    setSelectedAddOns(prev => 
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const isSelected = (addOnId: string) => selectedAddOns.includes(addOnId);

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-surface rounded mb-4 max-w-md mx-auto"></div>
            <div className="h-4 bg-surface rounded mb-12 max-w-2xl mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-32 bg-surface rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-32 bg-surface/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="PuzzlePieceIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Customize Your Package</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Add-On Configurator
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Enhance your plan with additional features and services. Build the perfect solution for your unique needs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const categoryAddOns = addOns.filter(addOn => addOn.category === category);
            const selectedInCategory = categoryAddOns.filter(addOn => isSelected(addOn.id)).length;
            
            return (
              <div key={category} className="relative">
                <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary">
                  {category}
                  {selectedInCategory > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                      {selectedInCategory}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-Ons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              onClick={() => toggleAddOn(addOn.id)}
              className={`relative glassmorphism rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                isSelected(addOn.id)
                  ? 'ring-2 ring-primary constellation-glow'
                  : 'hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {addOn.popular && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
              )}

              {/* Selection Indicator */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {addOn.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    {addOn.description}
                  </p>
                  <div className="text-xs text-text-tertiary mb-3">
                    {addOn.category}
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected(addOn.id)
                    ? 'bg-primary border-primary' :'border-border'
                }`}>
                  {isSelected(addOn.id) && (
                    <Icon name="CheckIcon" size={14} className="text-primary-foreground" />
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-xl text-foreground">
                  ${addOn.price}
                </span>
                <span className="text-sm text-text-secondary">
                  /month
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & CTA */}
        {selectedAddOns.length > 0 && (
          <div className="glassmorphism rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  Your Custom Configuration
                </h3>
                <p className="text-text-secondary mb-4">
                  {selectedAddOns.length} add-on{selectedAddOns.length !== 1 ? 's' : ''} selected
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedAddOns.map((addOnId) => {
                    const addOn = addOns.find(a => a.id === addOnId);
                    return addOn ? (
                      <span
                        key={addOnId}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {addOn.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="mb-4">
                  <p className="text-sm text-text-secondary">Additional Monthly Cost</p>
                  <p className="font-display text-3xl text-primary">
                    ${totalPrice.toLocaleString()}
                  </p>
                </div>
                <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-heading rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                  <span>Add to Quote</span>
                  <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedAddOns.length === 0 && (
          <div className="text-center py-12">
            <Icon name="PlusCircleIcon" size={48} className="text-text-tertiary mx-auto mb-4" />
            <p className="text-text-secondary">
              Select add-ons to customize your package and see pricing
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddOnConfigurator;