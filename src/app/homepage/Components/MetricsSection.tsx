import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MetricItem {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent';
}

interface MetricsSectionProps {
  className?: string;
}

const MetricsSection = ({ className = '' }: MetricsSectionProps) => {
  const metrics: MetricItem[] = [
    {
      id: 1,
      value: "98%",
      label: "Client Retention Rate",
      description: "Long-term partnerships built on consistent results",
      icon: "HeartIcon",
      color: "primary"
    },
    {
      id: 2,
      value: "340%",
      label: "Average ROI Improvement",
      description: "Measurable business impact across all implementations",
      icon: "TrendingUpIcon",
      color: "accent"
    },
    {
      id: 3,
      value: "500+",
      label: "Projects Delivered",
      description: "On-time delivery with zero compromise on quality",
      icon: "CheckCircleIcon",
      color: "secondary"
    },
    {
      id: 4,
      value: "24/7",
      label: "Enterprise Support",
      description: "Round-the-clock assistance for mission-critical systems",
      icon: "ClockIcon",
      color: "primary"
    }
  ];

  const getColorClasses = (color: 'primary' | 'secondary' | 'accent') => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          border: 'border-secondary/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20'
        };
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Measurable Results,
            <span className="block text-primary">Not Just Impressive Demos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            Our success is measured by your growth. Here's how we've helped businesses like yours achieve remarkable transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => {
            const colors = getColorClasses(metric.color);
            return (
              <div
                key={metric.id}
                className={`glassmorphism p-8 rounded-xl orbital-card hover:scale-105 transition-all duration-300 ${colors.border}`}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <Icon 
                      name={metric.icon as any} 
                      size={32} 
                      className={colors.text} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`font-display text-4xl lg:text-5xl ${colors.text}`}>
                      {metric.value}
                    </div>
                    <h3 className="font-heading text-xl text-foreground">
                      {metric.label}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live metrics indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-text-tertiary text-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live metrics updated in real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;