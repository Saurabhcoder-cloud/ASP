'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ConsultationForm {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  currentChallenges: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
}

interface EnterpriseConsultationProps {
  className?: string;
}

const EnterpriseConsultation = ({ className = '' }: EnterpriseConsultationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<ConsultationForm>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    currentChallenges: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Professional Services',
    'Other'
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+'
  ];

  const timelines = [
    'ASAP (Within 30 days)',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Planning phase'
  ];

  const handleInputChange = (field: keyof ConsultationForm, value: string) => {
    if (!isHydrated) return;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-surface rounded mb-4 max-w-md mx-auto"></div>
            <div className="h-4 bg-surface rounded mb-12 max-w-2xl mx-auto"></div>
            <div className="glassmorphism rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-16 bg-surface rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isSubmitted) {
    return (
      <section className={`py-20 lg:py-32 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphism rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={32} className="text-success" />
            </div>
            <h2 className="font-display text-3xl text-foreground mb-4">
              Consultation Request Received
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Thank you for your interest in our enterprise solutions. Our team will review your requirements and contact you within 24 hours to schedule your consultation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center text-sm text-text-secondary">
                <Icon name="ClockIcon" size={16} className="mr-2" />
                <span>Expected response time: 24 hours</span>
              </div>
              <div className="flex items-center justify-center text-sm text-text-secondary">
                <Icon name="EnvelopeIcon" size={16} className="mr-2" />
                <span>Confirmation sent to {formData.email}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  companyName: '',
                  contactName: '',
                  email: '',
                  phone: '',
                  companySize: '',
                  industry: '',
                  currentChallenges: '',
                  budget: '',
                  timeline: '',
                  additionalInfo: ''
                });
              }}
              className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-heading rounded-lg magnetic-cta transition-all duration-300"
            >
              <Icon name="ArrowLeftIcon" size={16} className="mr-2" />
              <span>Submit Another Request</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-32 bg-surface/30 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="UserGroupIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Enterprise Solutions</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Let's discuss your unique requirements and create a custom solution that drives measurable results for your organization.
          </p>
        </div>

        {/* Consultation Form */}
        <div className="glassmorphism rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company & Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Full Name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+91 93699 91272"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Size *
                </label>
                <select
                  required
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industry *
                </label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Current Challenges *
              </label>
              <textarea
                required
                rows={4}
                value={formData.currentChallenges}
                onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Describe your current challenges and what you're looking to achieve..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline *
                </label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                rows={3}
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Any additional details or specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-primary text-primary-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span>Submitting Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Schedule My Consultation</span>
                    <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                  </div>
                )}
              </button>
              <p className="text-xs text-text-secondary text-center mt-3">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="UserGroupIcon" size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Expert Consultation
            </h3>
            <p className="text-sm text-text-secondary">
              Meet with our senior solutions architects to discuss your unique requirements
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="DocumentTextIcon" size={24} className="text-secondary" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Custom Proposal
            </h3>
            <p className="text-sm text-text-secondary">
              Receive a detailed proposal with timeline, pricing, and implementation plan
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="RocketLaunchIcon" size={24} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Fast Implementation
            </h3>
            <p className="text-sm text-text-secondary">
              Get started quickly with our proven implementation methodology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseConsultation;