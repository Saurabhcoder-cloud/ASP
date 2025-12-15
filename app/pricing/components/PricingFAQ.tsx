'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface PricingFAQProps {
  className?: string;
}

const PricingFAQ = ({ className = '' }: PricingFAQProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqData: FAQItem[] = [
    {
      id: 'pricing-model',
      question: 'How does your pricing model work?',
      answer: 'Our pricing is transparent and scalable. We offer three main tiers: Starter Growth ($2,500/month), Professional Scale ($5,000/month), and Enterprise Transform (custom pricing). Each tier includes a comprehensive set of features with the ability to add custom solutions as needed.',
      category: 'pricing'
    },
    {
      id: 'contract-terms',
      question: 'What are your contract terms?',
      answer: 'We offer flexible contract terms starting from month-to-month for Starter plans, with discounts available for annual commitments. Professional and Enterprise plans typically include 6-12 month terms with performance guarantees and SLA commitments.',
      category: 'pricing'
    },
    {
      id: 'setup-fees',
      question: 'Are there any setup or onboarding fees?',
      answer: 'Setup and onboarding are included in all our plans. This includes initial consultation, system configuration, team training, and the first month of implementation support. No hidden fees or surprise charges.',
      category: 'pricing'
    },
    {
      id: 'roi-guarantee',
      question: 'Do you guarantee ROI?',
      answer: 'Yes, we stand behind our results. Professional and Enterprise plans include ROI guarantees with specific performance metrics. If we don\'t meet agreed-upon targets within the first 90 days, we\'ll work additional hours at no cost until we do.',
      category: 'pricing'
    },
    {
      id: 'ai-chatbots',
      question: 'How many AI chatbots are included?',
      answer: 'Starter includes 1 custom chatbot, Professional includes 3 chatbots, and Enterprise includes unlimited chatbots. Each chatbot is fully customized for your specific use cases and can be trained on your company data.',
      category: 'features'
    },
    {
      id: 'voice-agents',
      question: 'What are AI calling agents and how do they work?',
      answer: 'AI calling agents are intelligent voice systems that can make and receive calls for lead qualification, appointment setting, and customer support. They use natural language processing to have human-like conversations and are available 24/7.',
      category: 'features'
    },
    {
      id: 'integrations',
      question: 'Which systems can you integrate with?',
      answer: 'We integrate with all major CRM systems (Salesforce, HubSpot, Pipedrive), marketing platforms (Mailchimp, Constant Contact), and business tools (Slack, Microsoft Teams, Google Workspace). Custom integrations are available for Enterprise clients.',
      category: 'features'
    },
    {
      id: 'data-security',
      question: 'How do you handle data security and compliance?',
      answer: 'We maintain SOC 2 Type II compliance, GDPR compliance, and enterprise-grade security measures. All data is encrypted in transit and at rest, with regular security audits and penetration testing.',
      category: 'features'
    },
    {
      id: 'support-response',
      question: 'What are your support response times?',
      answer: 'Starter plans receive support within 48 hours, Professional plans within 24 hours, and Enterprise clients receive priority support with 2-hour response times. All plans include email and chat support.',
      category: 'support'
    },
    {
      id: 'training-included',
      question: 'Is training included in the pricing?',
      answer: 'Yes, comprehensive training is included. Starter includes 1 training session, Professional includes 3 sessions, and Enterprise includes unlimited training. We also provide documentation, video tutorials, and ongoing support.',
      category: 'support'
    },
    {
      id: 'account-manager',
      question: 'Do I get a dedicated account manager?',
      answer: 'Enterprise clients receive a dedicated account manager for strategic guidance and relationship management. Professional clients have access to a shared account management team, while Starter clients work directly with our support team.',
      category: 'support'
    },
    {
      id: 'upgrade-downgrade',
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely. You can upgrade at any time with immediate access to new features. Downgrades are processed at the end of your current billing cycle. We\'ll help you transition smoothly between plans.',
      category: 'support'
    },
    {
      id: 'implementation-time',
      question: 'How long does implementation take?',
      answer: 'Starter implementations typically take 2-4 weeks, Professional implementations take 4-8 weeks, and Enterprise implementations vary based on complexity but typically range from 8-16 weeks. We provide detailed project timelines during onboarding.',
      category: 'implementation'
    },
    {
      id: 'custom-development',
      question: 'Do you offer custom development?',
      answer: 'Yes, Professional plans include 10 hours of custom development per month, and Enterprise plans include unlimited custom development. This covers unique features, specialized integrations, and tailored solutions for your business needs.',
      category: 'implementation'
    },
    {
      id: 'migration-assistance',
      question: 'Do you help with migrating from existing systems?',
      answer: 'We provide full migration assistance including data export, system mapping, and seamless transition planning. Our team handles the technical aspects while ensuring minimal disruption to your business operations.',
      category: 'implementation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'pricing', name: 'Pricing & Billing' },
    { id: 'features', name: 'Features & Capabilities' },
    { id: 'support', name: 'Support & Training' },
    { id: 'implementation', name: 'Implementation' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (itemId: string) => {
    if (!isHydrated) return;
    
    setOpenItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-surface rounded mb-4 max-w-md mx-auto"></div>
            <div className="h-4 bg-surface rounded mb-12 max-w-2xl mx-auto"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 bg-surface rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Icon name="QuestionMarkCircleIcon" size={16} className="text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get answers to common questions about our pricing, features, and implementation process.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface border border-border text-text-secondary hover:text-foreground hover:border-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="glassmorphism rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/20 transition-colors duration-200"
              >
                <span className="font-heading text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon 
                  name={isOpen(faq.id) ? "ChevronUpIcon" : "ChevronDownIcon"}
                  size={20}
                  className="text-text-secondary flex-shrink-0 transition-transform duration-200"
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isOpen(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4 border-t border-border/30">
                  <p className="text-text-secondary leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-heading rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                <Icon name="ChatBubbleLeftRightIcon" size={16} className="mr-2" />
                <span>Start Live Chat</span>
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-surface border border-border text-foreground font-heading rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <Icon name="PhoneIcon" size={16} className="mr-2" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;