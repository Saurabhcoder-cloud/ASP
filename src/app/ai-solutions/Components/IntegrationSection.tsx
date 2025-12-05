'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  setupTime: string;
  complexity: 'Easy' | 'Medium' | 'Advanced';
  features: string[];
}

interface IntegrationSectionProps {
  className?: string;
}

const IntegrationSection = ({ className = '' }: IntegrationSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('crm');

  const categories = [
  { id: 'crm', name: 'CRM Systems', icon: 'UserGroupIcon' },
  { id: 'communication', name: 'Communication', icon: 'ChatBubbleLeftRightIcon' },
  { id: 'ecommerce', name: 'E-commerce', icon: 'ShoppingCartIcon' },
  { id: 'analytics', name: 'Analytics', icon: 'ChartBarIcon' },
  { id: 'productivity', name: 'Productivity', icon: 'BriefcaseIcon' }];


  const integrations: Integration[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'Complete CRM integration with lead management and opportunity tracking',
    logo: "https://images.unsplash.com/photo-1728410539013-ad662a093c68",
    alt: 'Salesforce cloud platform logo on blue background',
    setupTime: '15 minutes',
    complexity: 'Easy',
    features: ['Lead sync', 'Opportunity tracking', 'Contact management', 'Custom fields']
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Seamless integration with marketing automation and sales pipeline',
    logo: "https://images.unsplash.com/photo-1680176040970-523e88e1ff34",
    alt: 'HubSpot marketing platform interface on laptop screen',
    setupTime: '10 minutes',
    complexity: 'Easy',
    features: ['Marketing automation', 'Pipeline management', 'Email sequences', 'Analytics']
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    description: 'Sales-focused CRM with deal tracking and activity management',
    logo: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
    alt: 'Business analytics dashboard showing sales pipeline data',
    setupTime: '12 minutes',
    complexity: 'Easy',
    features: ['Deal tracking', 'Activity logging', 'Sales reporting', 'Team collaboration']
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'communication',
    description: 'Real-time notifications and team collaboration integration',
    logo: "https://images.unsplash.com/photo-1688678991398-ffa098ecddb5",
    alt: 'Slack team communication interface on mobile device',
    setupTime: '5 minutes',
    complexity: 'Easy',
    features: ['Channel notifications', 'Direct messages', 'File sharing', 'Bot commands']
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'communication',
    description: 'Enterprise communication with meeting integration and file sharing',
    logo: "https://images.unsplash.com/photo-1649433391841-02a04e22ad50",
    alt: 'Microsoft Teams video conference meeting on computer screen',
    setupTime: '8 minutes',
    complexity: 'Medium',
    features: ['Video calls', 'File collaboration', 'Calendar sync', 'Channel management']
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'ecommerce',
    description: 'E-commerce platform integration for order and customer management',
    logo: "https://images.unsplash.com/photo-1731613414601-9202a4c4fbc1",
    alt: 'Shopify e-commerce store interface showing product catalog',
    setupTime: '20 minutes',
    complexity: 'Medium',
    features: ['Order tracking', 'Customer profiles', 'Inventory sync', 'Payment processing']
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'ecommerce',
    description: 'WordPress e-commerce integration with product and order management',
    logo: "https://images.unsplash.com/photo-1560472355-a3b4bcfe790c",
    alt: 'WooCommerce WordPress e-commerce dashboard on laptop',
    setupTime: '25 minutes',
    complexity: 'Advanced',
    features: ['Product catalog', 'Order management', 'Customer data', 'Payment gateways']
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    category: 'analytics',
    description: 'Comprehensive web analytics and conversion tracking integration',
    logo: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    alt: 'Google Analytics dashboard showing website traffic data',
    setupTime: '15 minutes',
    complexity: 'Medium',
    features: ['Conversion tracking', 'User behavior', 'Traffic analysis', 'Goal monitoring']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'productivity',
    description: 'Automation platform connecting thousands of apps and workflows',
    logo: "https://images.unsplash.com/photo-1706697318037-7822d2c3fd59",
    alt: 'Zapier automation workflow interface on computer screen',
    setupTime: '10 minutes',
    complexity: 'Easy',
    features: ['Workflow automation', 'Multi-app connections', 'Trigger actions', 'Data sync']
  }];


  const filteredIntegrations = integrations.filter((integration) => integration.category === activeCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Easy':return 'text-success bg-success/20';
      case 'Medium':return 'text-accent bg-accent/20';
      case 'Advanced':return 'text-error bg-error/20';
      default:return 'text-text-secondary bg-muted';
    }
  };

  return (
    <section id="integrations" className={`py-20 lg:py-32 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-primary/30 mb-6">
            <Icon name="PuzzlePieceIcon" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Seamless Integrations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Connect With Your Existing Tools
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Our AI solutions integrate seamlessly with your current business systems. 
            No disruption, no data migration headaches—just enhanced functionality that works with what you already have.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeCategory === category.id ?
            'bg-primary text-primary-foreground shadow-lg' :
            'bg-card text-text-secondary hover:text-foreground hover:bg-muted'}`
            }>

              <Icon name={category.icon as any} size={18} />
              <span>{category.name}</span>
            </button>
          )}
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredIntegrations.map((integration) =>
          <div key={integration.id} className="glassmorphism rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <AppImage
                  src={integration.logo}
                  alt={integration.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-foreground mb-1">{integration.name}</h3>
                  <p className="text-text-secondary text-sm">{integration.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="ClockIcon" size={14} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{integration.setupTime}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getComplexityColor(integration.complexity)}`}>
                  {integration.complexity}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {integration.features.map((feature, index) =>
                <div key={index} className="flex items-center space-x-1">
                      <Icon name="CheckIcon" size={12} className="text-success flex-shrink-0" />
                      <span className="text-xs text-text-secondary">{feature}</span>
                    </div>
                )}
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg">
                View Integration Guide
              </button>
            </div>
          )}
        </div>

        {/* API Documentation CTA */}
        <div className="glassmorphism rounded-2xl p-8 lg:p-12 border border-border/50 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="CodeBracketIcon" size={32} className="text-secondary" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
              Need a Custom Integration?
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Our comprehensive API documentation and developer tools make it easy to build custom integrations 
              for any system. Get started with our RESTful APIs, webhooks, and SDKs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-heading rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                <Icon name="DocumentTextIcon" size={18} className="mr-2" />
                API Documentation
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-primary text-primary font-heading rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Icon name="ChatBubbleLeftRightIcon" size={18} className="mr-2" />
                Talk to Developer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IntegrationSection;