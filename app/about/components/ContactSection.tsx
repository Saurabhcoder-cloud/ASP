'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
  color: string;
}

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('consultation');

  const contactMethods: ContactMethod[] = [
    {
      id: 'consultation',
      icon: 'CalendarDaysIcon',
      title: 'Schedule Consultation',
      description:
        'Book a strategic consultation to discuss your digital transformation needs and explore partnership opportunities.',
      action: 'Book Meeting',
      href: '/contact',
      color: 'primary',
    },
    {
      id: 'technical',
      icon: 'CogIcon',
      title: 'Technical Inquiry',
      description:
        'Get detailed technical information about our AI solutions, integration capabilities, and implementation processes.',
      action: 'Technical Support',
      href: '/contact',
      color: 'secondary',
    },
    {
      id: 'partnership',
      icon: 'HandshakeIcon',
      title: 'Partnership Discussion',
      description:
        'Explore strategic partnerships, joint ventures, and collaboration opportunities with our leadership team.',
      action: 'Partner With Us',
      href: '/contact',
      color: 'accent',
    },
    {
      id: 'media',
      icon: 'MegaphoneIcon',
      title: 'Media Relations',
      description:
        'Press inquiries, interview requests, and media kit access for journalists and industry publications.',
      action: 'Media Kit',
      href: '/contact',
      color: 'success',
    },
  ];

  // ❌ Removed officeLocations section (kept for reference but unused)
  /*
  const officeLocations = [
    { ... }
  ];
  */

  return (
    <section className={`py-16 lg:py-24 bg-surface/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Multiple Ways to
            <span className="block text-primary">Connect With Us</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose the communication channel that best fits your needs. Our team is ready to help you accelerate your digital transformation journey.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`glassmorphism rounded-xl p-6 cursor-pointer transition-all duration-300 orbital-card ${
                selectedMethod === method.id
                  ? 'ring-2 ring-primary constellation-glow'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  method.color === 'primary'
                    ? 'bg-primary/20'
                    : method.color === 'secondary'
                    ? 'bg-secondary/20'
                    : method.color === 'accent'
                    ? 'bg-accent/20'
                    : 'bg-success/20'
                }`}
              >
                <Icon
                  name={method.icon as any}
                  size={24}
                  className={
                    method.color === 'primary'
                      ? 'text-primary'
                      : method.color === 'secondary'
                      ? 'text-secondary'
                      : method.color === 'accent'
                      ? 'text-accent'
                      : 'text-success'
                  }
                />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-3">{method.title}</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{method.description}</p>
              <button
                className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                  method.color === 'primary'
                    ? 'bg-primary text-primary-foreground hover:shadow-lg'
                    : method.color === 'secondary'
                    ? 'bg-secondary text-secondary-foreground hover:shadow-lg'
                    : method.color === 'accent'
                    ? 'bg-accent text-accent-foreground hover:shadow-lg'
                    : 'bg-success text-success-foreground hover:shadow-lg'
                }`}
              >
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* ❌ OFFICE LOCATIONS REMOVED  
        --------------------------------
        Entire block below is deleted.
        --------------------------------
        */}

        {/* Quick Contact Info */}
        <div className="mt-16 text-center glassmorphism rounded-2xl p-8">
          <h4 className="font-heading text-xl text-foreground mb-4">
            Ready to Start Your Digital Transformation?
          </h4>
          <p className="text-text-secondary mb-6">
            Our team is standing by to help you architect your digital future. Reach out today to begin the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91 93699 91272"
              className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium magnetic-cta constellation-glow transition-all duration-300"
            >
              <Icon name="PhoneIcon" size={18} className="mr-2" />
              Call Now: +91 93699 91272
            </a>
            <a
              href="mailto:hello@aspglobal.com"
              className="flex items-center px-6 py-3 bg-surface border border-border text-foreground rounded-lg font-medium hover:bg-surface/80 transition-all duration-300"
            >
              <Icon name="EnvelopeIcon" size={18} className="mr-2" />
              hello@aspglobal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
