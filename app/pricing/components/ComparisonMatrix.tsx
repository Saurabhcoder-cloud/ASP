import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    starter: string | boolean;
    professional: string | boolean;
    enterprise: string | boolean;
    description?: string;
  }[];
}

interface ComparisonMatrixProps {
  className?: string;
}

const ComparisonMatrix = ({ className = '' }: ComparisonMatrixProps) => {
  const comparisonData: ComparisonFeature[] = [
    {
      category: 'AI Solutions',
      features: [
        {
          name: 'AI Chatbots',
          starter: '1 Custom Bot',
          professional: '3 Custom Bots',
          enterprise: 'Unlimited',
          description: 'Intelligent conversational agents for customer support and lead generation'
        },
        {
          name: 'AI Calling Agents',
          starter: false,
          professional: '2 Voice Agents',
          enterprise: 'Unlimited',
          description: 'Automated voice agents for lead qualification and customer outreach'
        },
        {
          name: 'Natural Language Processing',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Custom Models',
          description: 'Understanding and processing of human language for better interactions'
        },
        {
          name: 'Machine Learning Integration',
          starter: false,
          professional: 'Standard',
          enterprise: 'Custom ML',
          description: 'Predictive analytics and intelligent automation capabilities'
        }
      ]
    },
    {
      category: 'Lead Generation & Marketing',
      features: [
        {
          name: 'Lead Capture Forms',
          starter: true,
          professional: true,
          enterprise: true,
          description: 'Optimized forms for capturing and qualifying leads'
        },
        {
          name: 'Email Marketing Automation',
          starter: 'Basic Sequences',
          professional: 'Advanced Workflows',
          enterprise: 'AI-Powered',
          description: 'Automated email campaigns based on user behavior and preferences'
        },
        {
          name: 'Social Media Integration',
          starter: false,
          professional: '5 Platforms',
          enterprise: 'All Platforms',
          description: 'Connect and automate across social media channels'
        },
        {
          name: 'Landing Page Builder',
          starter: '3 Pages',
          professional: '10 Pages',
          enterprise: 'Unlimited',
          description: 'Create high-converting landing pages with drag-and-drop builder'
        }
      ]
    },
    {
      category: 'Analytics & Reporting',
      features: [
        {
          name: 'Performance Dashboard',
          starter: 'Basic Metrics',
          professional: 'Advanced Analytics',
          enterprise: 'Custom Dashboards',
          description: 'Real-time insights into campaign performance and ROI'
        },
        {
          name: 'Conversion Tracking',
          starter: true,
          professional: true,
          enterprise: true,
          description: 'Track and optimize conversion rates across all touchpoints'
        },
        {
          name: 'Predictive Analytics',
          starter: false,
          professional: 'Standard',
          enterprise: 'Advanced AI',
          description: 'Forecast trends and optimize strategies using machine learning'
        },
        {
          name: 'Custom Reports',
          starter: false,
          professional: 'Monthly',
          enterprise: 'Real-time',
          description: 'Detailed reports tailored to your business metrics'
        }
      ]
    },
    {
      category: 'Integrations & Technical',
      features: [
        {
          name: 'CRM Integration',
          starter: '1 System',
          professional: '5 Systems',
          enterprise: 'Unlimited',
          description: 'Connect with popular CRM platforms like Salesforce, HubSpot'
        },
        {
          name: 'API Access',
          starter: false,
          professional: 'Limited',
          enterprise: 'Full Access',
          description: 'Programmatic access to platform features and data'
        },
        {
          name: 'Webhook Support',
          starter: false,
          professional: true,
          enterprise: true,
          description: 'Real-time data synchronization with external systems'
        },
        {
          name: 'Custom Development',
          starter: false,
          professional: '10 Hours/Month',
          enterprise: 'Unlimited',
          description: 'Tailored features and integrations for unique requirements'
        }
      ]
    },
    {
      category: 'Support & Training',
      features: [
        {
          name: 'Response Time',
          starter: '48 Hours',
          professional: '24 Hours',
          enterprise: '2 Hours',
          description: 'Guaranteed response time for support requests'
        },
        {
          name: 'Support Channels',
          starter: 'Email',
          professional: 'Email + Chat',
          enterprise: 'All Channels',
          description: 'Available support methods including phone, chat, and email'
        },
        {
          name: 'Account Manager',
          starter: false,
          professional: false,
          enterprise: true,
          description: 'Dedicated account manager for strategic guidance'
        },
        {
          name: 'Training Sessions',
          starter: '1 Session',
          professional: '3 Sessions',
          enterprise: 'Unlimited',
          description: 'Comprehensive training for your team on platform usage'
        }
      ]
    }
  ];

  const plans = [
    { id: 'starter', name: 'Starter Growth', price: '$2,500/mo' },
    { id: 'professional', name: 'Professional Scale', price: '$5,000/mo', popular: true },
    { id: 'enterprise', name: 'Enterprise Transform', price: 'Custom' }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckIcon" size={20} className="text-success mx-auto" />
      ) : (
        <Icon name="XMarkIcon" size={20} className="text-text-tertiary mx-auto" />
      );
    }
    return (
      <span className="text-sm text-foreground font-medium">
        {value}
      </span>
    );
  };

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Icon name="TableCellsIcon" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Detailed Comparison</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Feature Comparison Matrix
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Compare all features across our pricing tiers to find the perfect fit for your business needs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glassmorphism rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-surface/50 border-b border-border">
            <div className="text-left">
              <h3 className="font-heading text-lg text-foreground">Features</h3>
            </div>
            {plans.map((plan) => (
              <div key={plan.id} className="text-center">
                <div className={`relative ${plan.popular ? 'ring-2 ring-primary rounded-lg p-4' : 'p-4'}`}>
                  {plan.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h4 className="font-heading text-lg text-foreground mb-1">
                    {plan.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {plan.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Categories */}
          {comparisonData.map((category, categoryIndex) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-surface/30 border-b border-border">
                <div className="col-span-4">
                  <h4 className="font-heading text-base text-primary">
                    {category.category}
                  </h4>
                </div>
              </div>

              {/* Category Features */}
              {category.features.map((feature, featureIndex) => (
                <div
                  key={feature.name}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-border/50 hover:bg-surface/20 transition-colors duration-200"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground mb-1">
                      {feature.name}
                    </span>
                    {feature.description && (
                      <span className="text-xs text-text-secondary">
                        {feature.description}
                      </span>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderFeatureValue(feature.starter)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderFeatureValue(feature.professional)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderFeatureValue(feature.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* CTA Footer */}
          <div className="p-8 bg-surface/30 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  className={`py-3 px-6 rounded-lg font-heading transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground magnetic-cta constellation-glow'
                      : 'bg-surface border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  }`}
                >
                  Choose {plan.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-text-secondary">
            Need help choosing the right plan? 
            <button className="text-primary hover:text-primary/80 ml-1 font-medium">
              Schedule a consultation
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;