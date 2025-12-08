'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  className?: string;
}

const FAQ = ({ className = '' }: FAQProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Simple AI implementations typically take 4-6 weeks, while comprehensive digital transformations can range from 3-12 months. We provide detailed timelines during our initial consultation and maintain transparent progress tracking throughout the project.',
      category: 'process'
    },
    {
      id: '2',
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive post-launch support including 30 days of complimentary support, followed by flexible maintenance packages. Our support includes bug fixes, performance monitoring, security updates, and feature enhancements based on your evolving needs.',
      category: 'support'
    },
    {
      id: '3',
      question: 'What industries do you specialize in?',
      answer: 'We serve clients across various industries including healthcare, finance, e-commerce, manufacturing, and technology. Our team has deep expertise in industry-specific regulations, compliance requirements, and best practices to deliver tailored solutions.',
      category: 'services'
    },
    {
      id: '4',
      question: 'How do you ensure project security and data privacy?',
      answer: 'Security is paramount in all our projects. We implement enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, secure development practices, and regular security audits. All team members sign comprehensive NDAs and follow strict data handling protocols.',
      category: 'security'
    },
    {
      id: '5',
      question: 'Can you work with our existing technology stack?',
      answer: 'Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack. Our team conducts thorough technical assessments to ensure seamless integration while minimizing disruption to your current operations.',
      category: 'technical'
    },
    {
      id: '6',
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based engagements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements during our consultation.',
      category: 'pricing'
    },
    {
      id: '7',
      question: 'Do you provide training for our team?',
      answer: 'Yes, we include comprehensive training as part of our service delivery. This includes user training, administrator training, and technical documentation. We also offer ongoing training sessions and workshops to ensure your team maximizes the value of implemented solutions.',
      category: 'support'
    },
    {
      id: '8',
      question: 'How do you measure project success?',
      answer: 'We establish clear KPIs and success metrics at project initiation, including performance benchmarks, user adoption rates, ROI targets, and business impact measurements. Regular reporting and analytics dashboards provide transparent visibility into project progress and outcomes.',
      category: 'process'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqItems.length },
    { id: 'process', name: 'Process', count: faqItems.filter(item => item.category === 'process').length },
    { id: 'services', name: 'Services', count: faqItems.filter(item => item.category === 'services').length },
    { id: 'support', name: 'Support', count: faqItems.filter(item => item.category === 'support').length },
    { id: 'pricing', name: 'Pricing', count: faqItems.filter(item => item.category === 'pricing').length },
    { id: 'technical', name: 'Technical', count: faqItems.filter(item => item.category === 'technical').length },
    { id: 'security', name: 'Security', count: faqItems.filter(item => item.category === 'security').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className={`py-16 lg:py-24 bg-surface/30 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and partnerships. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Filter */}
          <div className="lg:col-span-1">
            <div className="glassmorphism p-6 rounded-2xl sticky top-24">
              <h3 className="font-heading text-lg text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-foreground hover:bg-surface/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-xs bg-surface px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-magnetic"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-surface/30 transition-colors duration-300"
                  >
                    <h3 className="font-heading text-lg text-foreground pr-4">
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}>
                      <Icon name="ChevronDownIcon" size={20} className="text-text-secondary" />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-border/30 pt-4">
                        <p className="text-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Icon name="QuestionMarkCircleIcon" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">
                  No questions found
                </h3>
                <p className="text-text-secondary">
                  Try selecting a different category or contact us directly.
                </p>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-12 glassmorphism p-8 rounded-2xl text-center">
              <h3 className="font-heading text-xl text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-text-secondary mb-6">
                Our team is here to help. Get in touch and we'll respond within 4 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-magnetic transition-all duration-300">
                  <Icon name="ChatBubbleLeftRightIcon" size={16} className="mr-2" />
                  Start Live Chat
                </button>
                <button className="px-6 py-3 bg-surface text-foreground border border-border rounded-lg font-medium hover:border-primary/50 transition-all duration-300">
                  <Icon name="EnvelopeIcon" size={16} className="mr-2" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;