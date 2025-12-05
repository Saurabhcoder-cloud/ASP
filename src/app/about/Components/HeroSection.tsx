import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1637621982007-44aaf9f9b0c6"
          alt="Professional business team collaborating in modern office with glass walls and natural lighting"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-tight">
            Where Technical Excellence
            <span className="block text-primary electric-gradient bg-clip-text text-transparent">
              Meets Business Strategy
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Meet the visionary leaders and technical experts who architect digital futures for Fortune 500 companies and scaling startups worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-text-secondary">
              <div className="w-2 h-2 bg-primary rounded-full animate-constellation-pulse"></div>
              <span className="text-sm font-medium">15+ Years Combined Experience</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <div className="w-2 h-2 bg-secondary rounded-full animate-constellation-pulse"></div>
              <span className="text-sm font-medium">500+ Projects Delivered</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <div className="w-2 h-2 bg-accent rounded-full animate-constellation-pulse"></div>
              <span className="text-sm font-medium">98% Client Retention</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-constellation-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-constellation-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-constellation-pulse"></div>
    </section>);

};

export default HeroSection;