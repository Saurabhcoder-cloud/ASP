'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface DemoFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface AIDemoProps {
  className?: string;
}

const AIDemo = ({ className = '' }: AIDemoProps) => {
  const [activeDemo, setActiveDemo] = useState<'calling' | 'chatbot'>('calling');

  const demoFeatures: DemoFeature[] = [
    {
      id: 1,
      title: "Natural Conversations",
      description: "Human-like interactions that feel authentic and engaging",
      icon: "ChatBubbleLeftRightIcon"
    },
    {
      id: 2,
      title: "Real-time Processing",
      description: "Instant responses with context-aware intelligence",
      icon: "BoltIcon"
    },
    {
      id: 3,
      title: "Multi-language Support",
      description: "Seamless communication across global markets",
      icon: "GlobeAltIcon"
    },
    {
      id: 4,
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions and behavior",
      icon: "ChartBarIcon"
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Experience AI That
            <span className="block text-secondary">Actually Works</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            See our AI calling agents and chatbots in action. No scripts, no demos—just real AI solving real business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <div className="space-y-8">
            {/* Demo Selector */}
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveDemo('calling')}
                className={`flex-1 px-6 py-4 rounded-lg font-heading text-lg transition-all duration-300 ${
                  activeDemo === 'calling' ?'bg-secondary text-secondary-foreground constellation-glow' :'bg-muted text-muted-foreground hover:bg-secondary/20'
                }`}
              >
                <Icon name="PhoneIcon" size={20} className="inline mr-3" />
                AI Calling Agent
              </button>
              <button
                onClick={() => setActiveDemo('chatbot')}
                className={`flex-1 px-6 py-4 rounded-lg font-heading text-lg transition-all duration-300 ${
                  activeDemo === 'chatbot' ?'bg-secondary text-secondary-foreground constellation-glow' :'bg-muted text-muted-foreground hover:bg-secondary/20'
                }`}
              >
                <Icon name="ChatBubbleLeftIcon" size={20} className="inline mr-3" />
                Smart Chatbot
              </button>
            </div>

            {/* Demo Preview */}
            <div className="glassmorphism rounded-xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl text-foreground">
                  {activeDemo === 'calling' ? 'AI Calling Agent Demo' : 'Smart Chatbot Demo'}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-success text-sm font-medium">Live Demo</span>
                </div>
              </div>

              {/* Mock conversation */}
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {activeDemo === 'calling' ? (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="PhoneIcon" size={16} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1 bg-secondary/10 rounded-lg p-3">
                        <p className="text-text-secondary text-sm">
                          "Hi, this is Sarah from ASP Global Solutions. I'm calling to follow up on your inquiry about our AI automation services. Is this a good time to chat?"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="flex-1 bg-primary/10 rounded-lg p-3 max-w-xs">
                        <p className="text-text-secondary text-sm">
                          "Yes, I'm interested in learning more about your chatbot solutions."
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" size={16} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="PhoneIcon" size={16} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1 bg-secondary/10 rounded-lg p-3">
                        <p className="text-text-secondary text-sm">
                          "Perfect! Based on your industry and requirements, I can show you how our AI chatbots have helped similar companies increase customer engagement by 340%. Would you like to schedule a personalized demo?"
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="flex-1 bg-primary/10 rounded-lg p-3 max-w-xs">
                        <p className="text-text-secondary text-sm">
                          "What AI solutions do you offer for customer support?"
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" size={16} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="ChatBubbleLeftIcon" size={16} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1 bg-secondary/10 rounded-lg p-3">
                        <p className="text-text-secondary text-sm">
                          "We offer intelligent chatbots that handle 80% of customer inquiries automatically, with seamless handoff to human agents when needed. Our solutions include natural language processing, sentiment analysis, and integration with your existing CRM systems."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="flex-1 bg-primary/10 rounded-lg p-3 max-w-xs">
                        <p className="text-text-secondary text-sm">
                          "Can you show me pricing options?"
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" size={16} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="ChatBubbleLeftIcon" size={16} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1 bg-secondary/10 rounded-lg p-3">
                        <p className="text-text-secondary text-sm">
                          "Absolutely! Our chatbot solutions start at $299/month for small businesses and scale up to enterprise packages. I can create a custom quote based on your specific needs. Would you like me to connect you with our pricing specialist?"
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex space-x-4">
                <Link
                  href="/ai-solutions"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-heading text-sm rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Try Live Demo</span>
                  <Icon name="PlayIcon" size={16} className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-transparent border border-secondary text-secondary font-heading text-sm rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <span>Schedule Call</span>
                  <Icon name="CalendarIcon" size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {demoFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="glassmorphism p-6 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon 
                        name={feature.icon as any} 
                        size={24} 
                        className="text-secondary" 
                      />
                    </div>
                    <h4 className="font-heading text-lg text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success metrics */}
            <div className="glassmorphism p-6 rounded-xl">
              <h4 className="font-heading text-xl text-foreground mb-4">
                Proven Results
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display text-2xl text-secondary">80%</div>
                  <div className="text-text-secondary text-xs">Query Resolution</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-accent">45%</div>
                  <div className="text-text-secondary text-xs">Cost Reduction</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-primary">24/7</div>
                  <div className="text-text-secondary text-xs">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;