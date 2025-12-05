import React from 'react';
import Link from 'next/link';

import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background with constellation animation */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-constellation-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-constellation-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-constellation-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-constellation-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight">
              Digital Solutions That
              <span className="block text-primary electric-gradient bg-clip-text text-transparent">
                Scale With Your Ambition
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-text-secondary font-body leading-relaxed">
              Where technical excellence meets business growth. We architect digital futures that deliver measurable results, not just impressive demos.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow hover:shadow-magnetic transition-all duration-300"
            >
              <span>Start Your Transformation</span>
              <Icon name="ArrowRightIcon" size={20} className="ml-3" />
            </Link>
            <Link
              href="/ai-solutions"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-heading text-lg rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              <Icon name="PlayIcon" size={20} className="mr-3" />
              <span>Watch AI Demo</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 space-y-6">
            <p className="text-text-tertiary font-medium text-sm uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-text-secondary font-heading text-lg">Fortune 500</div>
              <div className="w-1 h-1 bg-text-tertiary rounded-full"></div>
              <div className="text-text-secondary font-heading text-lg">Scale-ups</div>
              <div className="w-1 h-1 bg-text-tertiary rounded-full"></div>
              <div className="text-text-secondary font-heading text-lg">Enterprises</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbital animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-primary/20 rounded-full animate-orbital-rotation" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/20 rounded-full animate-orbital-rotation" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={24} className="text-text-tertiary" />
      </div>
    </section>
  );
};

export default HeroSection;