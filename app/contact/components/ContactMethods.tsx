import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: string;
  value: string;
  availability: string;
  responseTime: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      title: 'Phone Consultation',
      description: 'Speak directly with our solution architects for immediate guidance and technical discussions.',
      icon: 'PhoneIcon',
      action: 'Call Now',
      value: '+91 93699 91272',
      availability: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send detailed inquiries and receive comprehensive responses from our expert team.',
      icon: 'EnvelopeIcon',
      action: 'Send Email',
      value: 'hello@aspglobal.com',
      availability: '24/7 Monitoring',
      responseTime: '< 4 hours'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Get instant support and quick answers through our dedicated WhatsApp Business channel.',
      icon: 'ChatBubbleLeftEllipsisIcon',
      action: 'Message Us',
      value: '+91 93699 91272',
      availability: 'Mon-Fri, 8AM-8PM EST',
      responseTime: '< 30 minutes'
    },
    {
      id: 'calendar',
      title: 'Schedule Meeting',
      description: 'Book a personalized consultation to discuss your specific requirements and objectives.',
      icon: 'CalendarDaysIcon',
      action: 'Book Now',
      value: 'calendly.com/aspglobal',
      availability: 'Flexible Scheduling',
      responseTime: 'Same Day Confirmation'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-surface/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the communication method that works best for you. Our team is ready to help 
            across all channels with enterprise-grade support and response times.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="glassmorphism p-6 lg:p-8 rounded-2xl orbital-card group hover:shadow-magnetic transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={method.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>

              {/* Contact Value */}
              <div className="mb-6">
                <div className="text-primary font-medium text-lg mb-1">
                  {method.value}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Availability:</span>
                  <span className="text-foreground font-medium">{method.availability}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Response Time:</span>
                  <span className="text-success font-medium">{method.responseTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary rounded-lg font-medium transition-all duration-300 group-hover:shadow-constellation-glow">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="glassmorphism p-6 rounded-xl inline-block">
            <div className="flex items-center justify-center space-x-3 text-warning">
              <Icon name="ExclamationTriangleIcon" size={20} />
              <span className="font-medium">Emergency Support:</span>
              <span className="text-foreground">+1 (555) 911-HELP</span>
            </div>
            <p className="text-text-secondary text-sm mt-2">
              24/7 emergency line for critical system issues and urgent technical support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;