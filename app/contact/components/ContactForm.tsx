'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('sent'), 600);
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground">
            Tell us about your project
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Share your goals and requirements and we will create a tailored plan with clear timelines, pricing, and success
            metrics. Expect a response within four business hours.
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Response in hours',
                description: 'Dedicated engagement manager assigned immediately after submission.',
                icon: 'BoltIcon',
              },
              {
                title: 'Security-first',
                description: 'NDA-ready and SOC 2 practices to protect your data from day one.',
                icon: 'ShieldCheckIcon',
              },
              {
                title: 'Proven outcomes',
                description: 'ROI models and success metrics defined before any build starts.',
                icon: 'ChartBarSquareIcon',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface text-primary shadow-constellation">
                  <Icon name={item.icon} size={20} />
                </div>
                <div>
                  <p className="font-heading text-foreground">{item.title}</p>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glassmorphism p-8 rounded-2xl space-y-6 border border-border/40"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-text-secondary">Full name</span>
              <input
                required
                name="name"
                placeholder="Alex Johnson"
                className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-text-secondary">Work email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="alex@company.com"
                className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">Company</span>
            <input
              name="company"
              placeholder="Company name"
              className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">What do you want to build?</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Share a few sentences about your project, timeline, and budget."
              className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'sent'}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-magnetic disabled:opacity-70"
            >
              {status === 'sent' ? 'Message sent' : status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>
            <p className="text-xs text-text-secondary">
              By submitting, you agree to our privacy policy and consent to communication about your request.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
