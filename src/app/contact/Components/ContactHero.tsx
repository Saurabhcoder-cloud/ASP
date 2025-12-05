import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-background py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-constellation-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-constellation-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={16} className="mr-2" />
            Let's Build Something Amazing Together
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to Transform Your
            <span className="block text-primary">Digital Future?</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with our team of digital transformation experts. Whether you're looking to implement AI solutions, 
            scale your operations, or accelerate growth, we're here to turn your vision into measurable results.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-display text-primary mb-2">&lt;24h</div>
              <div className="text-sm text-text-secondary">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-display text-primary mb-2">500+</div>
              <div className="text-sm text-text-secondary">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-display text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;