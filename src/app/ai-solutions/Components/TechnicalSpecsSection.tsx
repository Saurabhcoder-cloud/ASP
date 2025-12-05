import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Specification {
  category: string;
  specs: {
    label: string;
    value: string;
    icon: string;
  }[];
}

interface TechnicalSpecsSectionProps {
  className?: string;
}

const TechnicalSpecsSection = ({ className = '' }: TechnicalSpecsSectionProps) => {
  const specifications: Specification[] = [
    {
      category: 'Performance Metrics',
      specs: [
        { label: 'Response Time', value: '< 200ms', icon: 'BoltIcon' },
        { label: 'Uptime Guarantee', value: '99.9%', icon: 'ShieldCheckIcon' },
        { label: 'Concurrent Users', value: '10,000+', icon: 'UserGroupIcon' },
        { label: 'Processing Speed', value: '1M+ requests/hour', icon: 'CpuChipIcon' }
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        { label: 'Data Encryption', value: 'AES-256', icon: 'LockClosedIcon' },
        { label: 'Compliance', value: 'SOC 2 Type II', icon: 'DocumentCheckIcon' },
        { label: 'GDPR Ready', value: 'Full Compliance', icon: 'GlobeAltIcon' },
        { label: 'Backup Frequency', value: 'Real-time', icon: 'CloudArrowUpIcon' }
      ]
    },
    {
      category: 'AI Capabilities',
      specs: [
        { label: 'Language Models', value: 'GPT-4 & Custom', icon: 'SparklesIcon' },
        { label: 'Languages Supported', value: '95+', icon: 'LanguageIcon' },
        { label: 'Intent Accuracy', value: '97.8%', icon: 'TargetIcon' },
        { label: 'Context Retention', value: '95.2%', icon: 'BrainIcon' }
      ]
    },
    {
      category: 'Integration & APIs',
      specs: [
        { label: 'REST API', value: 'v2.1', icon: 'CodeBracketIcon' },
        { label: 'Webhooks', value: 'Real-time', icon: 'LinkIcon' },
        { label: 'SDKs Available', value: '8 Languages', icon: 'WrenchScrewdriverIcon' },
        { label: 'Rate Limits', value: '10,000/min', icon: 'ClockIcon' }
      ]
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: 'ShieldCheckIcon', color: 'text-success' },
    { name: 'ISO 27001', icon: 'DocumentCheckIcon', color: 'text-primary' },
    { name: 'GDPR Compliant', icon: 'GlobeAltIcon', color: 'text-accent' },
    { name: 'HIPAA Ready', icon: 'LockClosedIcon', color: 'text-secondary' }
  ];

  return (
    <section id="technical-specs" className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-secondary/30 mb-6">
            <Icon name="CpuChipIcon" size={16} className="text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Technical Excellence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Enterprise-Grade Specifications
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Built for scale, security, and performance. Our AI solutions meet the highest enterprise standards 
            with comprehensive compliance, robust security, and lightning-fast response times.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specifications.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glassmorphism rounded-xl p-8 border border-border/50">
              <h3 className="font-heading text-xl text-foreground mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                {category.category}
              </h3>
              <div className="grid gap-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon name={spec.icon as any} size={16} className="text-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{spec.label}</span>
                    </div>
                    <span className="font-heading text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="glassmorphism rounded-2xl p-8 lg:p-12 border border-border/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl text-foreground mb-4">System Architecture</h3>
            <p className="text-text-secondary">
              Scalable, secure, and reliable infrastructure designed for enterprise workloads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="DevicePhoneMobileIcon" size={32} className="text-primary" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2">Frontend Layer</h4>
              <p className="text-text-secondary text-sm mb-4">
                Multi-channel interfaces including web, mobile, voice, and chat platforms
              </p>
              <div className="space-y-2">
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">React/Next.js</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">WebRTC</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">WebSocket</div>
              </div>
            </div>

            {/* Processing Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="CpuChipIcon" size={32} className="text-secondary" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2">AI Processing</h4>
              <p className="text-text-secondary text-sm mb-4">
                Advanced natural language processing with custom-trained models
              </p>
              <div className="space-y-2">
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">GPT-4 Turbo</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">Custom NLP</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">TensorFlow</div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="CircleStackIcon" size={32} className="text-accent" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2">Data Layer</h4>
              <p className="text-text-secondary text-sm mb-4">
                Secure, scalable data storage with real-time synchronization
              </p>
              <div className="space-y-2">
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">PostgreSQL</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">Redis Cache</div>
                <div className="text-xs text-text-secondary bg-muted rounded px-2 py-1">Vector DB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="font-heading text-2xl text-foreground mb-8">Security Certifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glassmorphism rounded-xl p-6 border border-border/50 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${cert.color.replace('text-', 'bg-')}/20`}>
                  <Icon name={cert.icon as any} size={24} className={cert.color} />
                </div>
                <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* API Documentation CTA */}
        <div className="glassmorphism rounded-2xl p-8 lg:p-12 border border-border/50 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Integrate?
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Access our comprehensive API documentation, code samples, and developer tools 
              to get started with your AI implementation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-heading rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                <Icon name="DocumentTextIcon" size={18} className="mr-2" />
                View Documentation
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-primary text-primary font-heading rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Icon name="CodeBracketIcon" size={18} className="mr-2" />
                Download SDK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;