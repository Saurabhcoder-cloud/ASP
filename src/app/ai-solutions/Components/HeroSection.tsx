import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-constellation-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-constellation-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-constellation-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-constellation-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-secondary/30">
            <Icon name="SparklesIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">AI Innovation Center</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight">
              Intelligent AI Solutions
              <span className="block text-transparent bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text">
                That Scale With You
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed">
              Experience the future of business automation with our advanced AI calling agents and chatbots. 
              Built for enterprise-grade performance with measurable ROI and seamless integration.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#live-demo"
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow hover:shadow-magnetic transition-all duration-300"
            >
              <Icon name="PlayIcon" size={20} className="mr-3" />
              Try Live Demo
            </Link>
            <Link
              href="#technical-specs"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-heading text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="DocumentTextIcon" size={20} className="mr-3" />
              Technical Docs
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-primary mb-2">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-accent mb-2">&lt;200ms</div>
              <div className="text-sm text-text-secondary">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-secondary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-display text-primary mb-2">24/7</div>
              <div className="text-sm text-text-secondary">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <Icon name="ChevronDownIcon" size={24} className="text-text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;