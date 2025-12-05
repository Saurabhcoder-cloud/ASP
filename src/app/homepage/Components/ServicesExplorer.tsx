'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: 'primary' | 'secondary' | 'accent';
  href: string;
}

interface ServicesExplorerProps {
  className?: string;
}

const ServicesExplorer = ({ className = '' }: ServicesExplorerProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "AI Solutions & Automation",
      description: "Intelligent calling agents and chatbots that transform customer interactions and streamline operations.",
      features: ["AI Calling Agents", "Smart Chatbots", "Process Automation", "24/7 Customer Support"],
      icon: "CpuChipIcon",
      color: "secondary",
      href: "/ai-solutions"
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "End-to-end digital solutions that modernize your business processes and accelerate growth.",
      features: ["System Integration", "Cloud Migration", "Digital Strategy", "Legacy Modernization"],
      icon: "RocketLaunchIcon",
      color: "primary",
      href: "/services"
    },
    {
      id: 3,
      title: "Growth Marketing",
      description: "Data-driven marketing strategies that generate qualified leads and maximize your ROI.",
      features: ["Lead Generation", "Marketing Automation", "Analytics & Insights", "Conversion Optimization"],
      icon: "ChartBarIcon",
      color: "accent",
      href: "/services"
    }
  ];

  const getColorClasses = (color: 'primary' | 'secondary' | 'accent') => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          hover: 'hover:border-primary/40'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          border: 'border-secondary/20',
          hover: 'hover:border-secondary/40'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          hover: 'hover:border-accent/40'
        };
    }
  };

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Explore Our
            <span className="block text-primary">Solution Ecosystem</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Discover how our integrated solutions work together to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const colors = getColorClasses(service.color);
            const isExpanded = expandedCard === service.id;
            
            return (
              <div
                key={service.id}
                className={`glassmorphism rounded-xl overflow-hidden transition-all duration-500 ${colors.border} ${colors.hover} ${
                  isExpanded ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <Icon 
                        name={service.icon as any} 
                        size={32} 
                        className={colors.text} 
                      />
                    </div>
                    <button
                      onClick={() => toggleCard(service.id)}
                      className={`p-2 rounded-lg ${colors.bg} ${colors.text} hover:scale-110 transition-all duration-300`}
                    >
                      <Icon 
                        name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"} 
                        size={20} 
                      />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>

                    {/* Expanded content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 space-y-4">
                        <h4 className="font-heading text-lg text-foreground">Key Features:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <Icon name="CheckIcon" size={16} className={colors.text} />
                              <span className="text-text-secondary text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={service.href}
                        className={`inline-flex items-center px-6 py-3 ${colors.bg} ${colors.text} font-heading text-sm rounded-lg hover:scale-105 transition-all duration-300`}
                      >
                        <span>Learn More</span>
                        <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow hover:shadow-magnetic transition-all duration-300"
          >
            <span>View All Services</span>
            <Icon name="ArrowRightIcon" size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesExplorer;