import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-background relative overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
              Ready to Transform
              <span className="block text-primary electric-gradient bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed">
              Join hundreds of businesses that have accelerated their growth with our proven digital solutions. Your transformation starts with a single conversation.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-primary text-primary-foreground font-heading text-xl rounded-lg magnetic-cta constellation-glow hover:shadow-magnetic transition-all duration-300"
            >
              <span>Start Your Journey</span>
              <Icon name="ArrowRightIcon" size={24} className="ml-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-foreground text-foreground font-heading text-xl rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Icon name="CurrencyDollarIcon" size={24} className="mr-4" />
              <span>View Pricing</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-text-tertiary text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={16} className="text-success" />
                <span>Quick Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={16} className="text-success" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="HeartIcon" size={16} className="text-success" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Contact options */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-text-secondary mb-6">
              Prefer to talk? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+91 93699 91272"
                className="inline-flex items-center px-6 py-3 bg-surface text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-300"
              >
                <Icon name="PhoneIcon" size={20} className="mr-3 text-primary" />
                <span>+91 93699 91272</span>
              </a>
              <a
                href="mailto:hello@aspglobal.com"
                className="inline-flex items-center px-6 py-3 bg-surface text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-300"
              >
                <Icon name="EnvelopeIcon" size={20} className="mr-3 text-primary" />
                <span>hello@aspglobal.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;