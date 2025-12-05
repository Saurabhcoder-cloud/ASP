import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  features: PricingFeature[];
  cta: string;
  badge?: string;
}

interface PricingPlansProps {
  className?: string;
}

const PricingPlans = ({ className = '' }: PricingPlansProps) => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Growth',
      description: 'Perfect for growing startups ready to scale their digital presence',
      price: '$2,500',
      period: '/month',
      popular: false,
      cta: 'Start Growing',
      features: [
        { name: 'AI Chatbot Integration', included: true, description: '1 custom chatbot' },
        { name: 'Lead Generation System', included: true },
        { name: 'Basic Analytics Dashboard', included: true },
        { name: 'Email Marketing Automation', included: true },
        { name: 'Standard Support (48h response)', included: true },
        { name: 'Monthly Strategy Call', included: true },
        { name: 'AI Calling Agents', included: false },
        { name: 'Advanced Integrations', included: false },
        { name: 'Custom Development', included: false },
        { name: 'Dedicated Account Manager', included: false }
      ]
    },
    {
      id: 'professional',
      name: 'Professional Scale',
      description: 'Comprehensive solution for established businesses seeking transformation',
      price: '$5,000',
      period: '/month',
      popular: true,
      badge: 'Most Popular',
      cta: 'Scale Now',
      features: [
        { name: 'AI Chatbot Integration', included: true, description: '3 custom chatbots' },
        { name: 'AI Calling Agents', included: true, description: '2 voice agents' },
        { name: 'Advanced Lead Generation', included: true },
        { name: 'Comprehensive Analytics', included: true },
        { name: 'Marketing Automation Suite', included: true },
        { name: 'Priority Support (24h response)', included: true },
        { name: 'Bi-weekly Strategy Calls', included: true },
        { name: 'Custom Integrations', included: true, description: 'Up to 5 systems' },
        { name: 'Performance Optimization', included: true },
        { name: 'Dedicated Account Manager', included: false }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Transform',
      description: 'Complete digital transformation for large organizations',
      price: 'Custom',
      period: 'pricing',
      popular: false,
      badge: 'Enterprise',
      cta: 'Get Custom Quote',
      features: [
        { name: 'Unlimited AI Solutions', included: true },
        { name: 'Custom AI Development', included: true },
        { name: 'Enterprise Integrations', included: true },
        { name: 'Advanced Security & Compliance', included: true },
        { name: 'White-label Solutions', included: true },
        { name: '24/7 Premium Support', included: true },
        { name: 'Weekly Strategy Sessions', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom Training Programs', included: true },
        { name: 'SLA Guarantees', included: true }
      ]
    }
  ];

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Transparent pricing designed to scale with your business. No hidden fees, no surprises—just clear value at every level.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glassmorphism rounded-2xl p-8 transition-all duration-300 hover:scale-105 orbital-card ${
                plan.popular 
                  ? 'ring-2 ring-primary constellation-glow' 
                  : 'hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-secondary mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="flex items-baseline justify-center mb-6">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-text-secondary ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-heading transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground magnetic-cta constellation-glow'
                    : 'bg-surface border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'
                }`}>
                  {plan.cta}
                </button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="font-heading text-lg text-foreground mb-4">
                  What's included:
                </h4>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Icon 
                      name={feature.included ? "CheckIcon" : "XMarkIcon"}
                      size={16}
                      className={`mt-1 mr-3 flex-shrink-0 ${
                        feature.included ? 'text-success' : 'text-text-tertiary'
                      }`}
                    />
                    <div className="flex-1">
                      <span className={`text-sm ${
                        feature.included ? 'text-foreground' : 'text-text-tertiary'
                      }`}>
                        {feature.name}
                      </span>
                      {feature.description && (
                        <div className="text-xs text-text-secondary mt-1">
                          {feature.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Need a custom solution? Let's build something amazing together.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground font-heading rounded-lg magnetic-cta transition-all duration-300">
            <span>Schedule Consultation</span>
            <Icon name="ArrowRightIcon" size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;