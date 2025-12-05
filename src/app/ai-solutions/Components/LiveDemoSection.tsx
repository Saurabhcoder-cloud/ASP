'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DemoType {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'calling' | 'chatbot';
}

interface LiveDemoSectionProps {
  className?: string;
}

const LiveDemoSection = ({ className = '' }: LiveDemoSectionProps) => {
  const [activeDemo, setActiveDemo] = useState<string>('sales-agent');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const demoTypes: DemoType[] = [
    {
      id: 'sales-agent',
      name: 'AI Sales Agent',
      description: 'Intelligent lead qualification and appointment scheduling',
      icon: 'PhoneIcon',
      category: 'calling'
    },
    {
      id: 'support-bot',
      name: 'Customer Support Bot',
      description: 'Automated ticket resolution and escalation handling',
      icon: 'ChatBubbleLeftRightIcon',
      category: 'chatbot'
    },
    {
      id: 'booking-agent',
      name: 'Booking Agent',
      description: 'Seamless appointment and reservation management',
      icon: 'CalendarDaysIcon',
      category: 'calling'
    },
    {
      id: 'feedback-collector',
      name: 'Feedback Collector',
      description: 'Automated survey and review collection system',
      icon: 'StarIcon',
      category: 'chatbot'
    }
  ];

  const handleDemoStart = () => {
    setIsPlaying(true);
    // Simulate demo duration
    setTimeout(() => setIsPlaying(false), 5000);
  };

  const selectedDemo = demoTypes.find(demo => demo.id === activeDemo);

  return (
    <section id="live-demo" className={`py-20 lg:py-32 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-secondary/30 mb-6">
            <Icon name="PlayIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Interactive Demonstrations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Experience AI in Action
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Test our AI agents with real conversations. See how they handle complex scenarios, 
            maintain context, and deliver natural interactions that convert prospects into customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selection */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-foreground mb-6">Choose Your Demo</h3>
            <div className="grid gap-4">
              {demoTypes.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'border-secondary bg-secondary/10 shadow-lg'
                      : 'border-border bg-card hover:border-secondary/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeDemo === demo.id ? 'bg-secondary text-secondary-foreground' : 'bg-muted'
                    }`}>
                      <Icon name={demo.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-lg text-foreground mb-2">{demo.name}</h4>
                      <p className="text-text-secondary text-sm">{demo.description}</p>
                      <div className="flex items-center mt-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          demo.category === 'calling' ?'bg-primary/20 text-primary' :'bg-accent/20 text-accent'
                        }`}>
                          {demo.category === 'calling' ? 'Voice AI' : 'Chat AI'}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Interface */}
          <div className="glassmorphism rounded-2xl p-8 border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <Icon name={selectedDemo?.icon as any} size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">{selectedDemo?.name}</h4>
                  <p className="text-sm text-text-secondary">Live Demo Environment</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-success font-medium">LIVE</span>
              </div>
            </div>

            {/* Demo Screen */}
            <div className="bg-background rounded-xl p-6 mb-6 min-h-[300px] flex flex-col">
              {!isPlaying ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="PlayIcon" size={32} className="text-secondary ml-1" />
                    </div>
                    <h5 className="font-heading text-lg text-foreground mb-2">Ready to Start Demo</h5>
                    <p className="text-text-secondary text-sm mb-6">
                      Click the button below to begin your interactive {selectedDemo?.name} experience
                    </p>
                    <button
                      onClick={handleDemoStart}
                      className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-heading rounded-lg magnetic-cta transition-all duration-300"
                    >
                      <Icon name="PlayIcon" size={16} className="mr-2" />
                      Start Demo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" size={16} className="text-secondary-foreground" />
                      </div>
                      <div className="flex-1 bg-muted rounded-lg p-3">
                        <p className="text-sm text-foreground">Hello! I'm interested in your services. Can you help me?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="SparklesIcon" size={16} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1 bg-primary/10 rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Absolutely! I'd be happy to help you find the perfect solution. Can you tell me a bit about your business and what challenges you're facing?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Demo Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <Icon name="MicrophoneIcon" size={16} className="text-foreground" />
                </button>
                <button className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <Icon name="VideoCameraIcon" size={16} className="text-foreground" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-text-secondary">Response Time:</span>
                <span className="text-xs font-medium text-success">147ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="BoltIcon" size={24} className="text-primary" />
            </div>
            <h4 className="font-heading text-lg text-foreground mb-2">Real-Time Processing</h4>
            <p className="text-text-secondary text-sm">
              Lightning-fast response times with advanced natural language understanding
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheckIcon" size={24} className="text-accent" />
            </div>
            <h4 className="font-heading text-lg text-foreground mb-2">Enterprise Security</h4>
            <p className="text-text-secondary text-sm">
              SOC 2 compliant with end-to-end encryption and data protection
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="CogIcon" size={24} className="text-secondary" />
            </div>
            <h4 className="font-heading text-lg text-foreground mb-2">Custom Integration</h4>
            <p className="text-text-secondary text-sm">
              Seamless integration with your existing CRM and business systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;