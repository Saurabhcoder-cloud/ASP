import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  isHeadquarters: boolean;
}

interface OfficeLocationsProps {
  className?: string;
}

const OfficeLocations = ({ className = '' }: OfficeLocationsProps) => {
  const offices: Office[] = [
    {
      id: 'hq',
      name: 'Global Headquarters',
      type: 'Main Office',
      address: '1234 Innovation Drive, Suite 500',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'United States',
      phone: '+91 93699 91272',
      email: 'sf@aspglobal.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      lat: 37.7749,
      lng: -122.4194,
      isHeadquarters: true
    },
    {
      id: 'ny',
      name: 'New York Office',
      type: 'Regional Hub',
      address: '567 Broadway, Floor 25',
      city: 'New York',
      state: 'NY',
      zip: '10012',
      country: 'United States',
      phone: '+91 93699 91272',
      email: 'ny@aspglobal.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      lat: 40.7128,
      lng: -74.0060,
      isHeadquarters: false
    },
    {
      id: 'austin',
      name: 'Austin Office',
      type: 'Development Center',
      address: '890 Tech Boulevard, Building C',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      country: 'United States',
      phone: '+91 93699 91272',
      email: 'austin@aspglobal.com',
      hours: 'Mon-Fri: 8AM-5PM CST',
      lat: 30.2672,
      lng: -97.7431,
      isHeadquarters: false
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            With strategically located offices across North America, we provide local expertise 
            with global capabilities to serve clients in every timezone.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office) => (
            <div
              key={office.id}
              className="glassmorphism p-6 lg:p-8 rounded-2xl orbital-card group hover:shadow-magnetic transition-all duration-300"
            >
              {/* Office Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-heading text-xl text-foreground">
                      {office.name}
                    </h3>
                    {office.isHeadquarters && (
                      <div className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-medium">
                        HQ
                      </div>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm">{office.type}</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPinIcon" size={16} className="text-text-secondary mt-1 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <div>{office.address}</div>
                    <div>{office.city}, {office.state} {office.zip}</div>
                    <div>{office.country}</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="PhoneIcon" size={16} className="text-text-secondary" />
                  <span className="text-sm text-foreground">{office.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="EnvelopeIcon" size={16} className="text-text-secondary" />
                  <span className="text-sm text-primary">{office.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="ClockIcon" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{office.hours}</span>
                </div>
              </div>

              {/* Map Preview */}
              <div className="h-32 bg-surface/50 rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office.name} Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                  className="border-0"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Get Directions
                </button>
                <button className="px-4 py-2 bg-surface text-foreground border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-all duration-300">
                  Schedule Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Coverage */}
        <div className="glassmorphism p-8 rounded-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Serving Clients Worldwide
            </h3>
            <p className="text-text-secondary mb-6">
              While our physical offices are strategically located across North America, 
              our digital-first approach enables us to serve clients globally with the same 
              level of excellence and responsiveness.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-display text-primary mb-2">50+</div>
                <div className="text-sm text-text-secondary">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display text-primary mb-2">24/7</div>
                <div className="text-sm text-text-secondary">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display text-primary mb-2">15+</div>
                <div className="text-sm text-text-secondary">Time Zones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display text-primary mb-2">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;