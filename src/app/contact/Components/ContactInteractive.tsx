'use client';

import React from 'react';
import ContactForm from './ContactForm';
import FAQ from './FAQ';

interface ContactInteractiveProps {
  className?: string;
}

const ContactInteractive = ({ className = '' }: ContactInteractiveProps) => {
  return (
    <div className={className}>
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default ContactInteractive;