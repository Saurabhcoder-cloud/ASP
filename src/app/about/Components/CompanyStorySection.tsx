import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CompanyStoryProps {
  className?: string;
}

const CompanyStorySection = ({ className = '' }: CompanyStoryProps) => {
  const milestones = [
  {
    year: "2018",
    title: "Foundation",
    description: "Started with a vision to bridge the gap between technical innovation and business growth acceleration."
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Pioneered AI-powered solutions for enterprise clients, establishing our reputation in intelligent automation."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations to serve Fortune 500 companies across North America and Europe."
  },
  {
    year: "2024",
    title: "Innovation Leadership",
    description: "Recognized as industry leader in digital transformation with 500+ successful project implementations."
  }];


  const values = [
  {
    icon: "LightBulbIcon",
    title: "Intelligent Confidence",
    description: "We combine reassuring expertise with forward-thinking innovation to deliver solutions that truly move the needle."
  },
  {
    icon: "ChartBarIcon",
    title: "Measurable Results",
    description: "Every solution we architect is designed to deliver quantifiable business impact and sustainable growth."
  },
  {
    icon: "UserGroupIcon",
    title: "Trusted Partnership",
    description: "We don't just build solutions—we become the strategic partner that scales with your ambition."
  },
  {
    icon: "CogIcon",
    title: "Technical Excellence",
    description: "Our sophisticated evolution approach ensures enterprise-grade solutions that stand the test of time."
  }];


  return (
    <section className={`py-16 lg:py-24 bg-surface/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Our Story: From Vision to
              <span className="block text-primary">Digital Reality</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              ASP Global Solutions was born from a simple yet powerful observation: the most successful digital transformations happen when technical mastery meets deep business understanding.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We embody the intersection of confident innovation and sophisticated evolution—not flashy disruption, but intelligent solutions that deliver measurable results for Fortune 500 companies and scaling startups alike.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="TrophyIcon" size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-heading text-lg text-foreground">Industry Recognition</div>
                <div className="text-sm text-text-secondary">Top Digital Transformation Partner 2024</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism rounded-2xl p-8 constellation-glow">
              <AppImage
                src="https://images.unsplash.com/photo-1531537264351-c1952d1db1f5"
                alt="Modern office workspace with team members collaborating around digital displays and laptops"
                className="w-full h-64 object-cover rounded-xl mb-6" />

              <div className="text-center">
                <div className="font-display text-2xl text-primary mb-2">500+</div>
                <div className="text-text-secondary">Successful Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-12">
            Our Journey of Innovation
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) =>
            <div key={milestone.year} className="relative">
                <div className="glassmorphism rounded-xl p-6 h-full orbital-card">
                  <div className="text-3xl font-display text-primary mb-3">{milestone.year}</div>
                  <h4 className="font-heading text-lg text-foreground mb-3">{milestone.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 &&
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              }
              </div>
            )}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) =>
            <div key={value.title} className="glassmorphism rounded-xl p-6 text-center orbital-card">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon as any} size={24} className="text-primary" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-3">{value.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CompanyStorySection;