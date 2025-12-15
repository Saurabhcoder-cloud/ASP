import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    icon: string;
  }[];
  testimonial: string;
  author: string;
  position: string;
  image: string;
  alt: string;
  aiType: 'calling' | 'chatbot' | 'hybrid';
}

interface CaseStudiesSectionProps {
  className?: string;
}

const CaseStudiesSection = ({ className = '' }: CaseStudiesSectionProps) => {
  const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp-sales',
    company: 'TechCorp Solutions',
    industry: 'B2B Software',
    challenge: 'High-volume lead qualification was overwhelming their sales team, causing delayed follow-ups and missed opportunities.',
    solution: 'Implemented AI calling agents for initial lead qualification and appointment scheduling with seamless CRM integration.',
    results: [
    { metric: 'Lead Response Time', improvement: '85% faster', icon: 'BoltIcon' },
    { metric: 'Qualified Leads', improvement: '+127%', icon: 'TrendingUpIcon' },
    { metric: 'Sales Team Efficiency', improvement: '+65%', icon: 'UserGroupIcon' },
    { metric: 'Monthly Revenue', improvement: '+$2.3M', icon: 'CurrencyDollarIcon' }],

    testimonial: "The AI calling agents transformed our lead qualification process. We're now capturing and converting leads we would have previously lost to slow response times.",
    author: 'Sarah Chen',
    position: 'VP of Sales',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129b1ff05-1762273604073.png",
    alt: 'Professional Asian woman with shoulder-length black hair in navy blazer smiling confidently',
    aiType: 'calling'
  },
  {
    id: 'retailplus-support',
    company: 'RetailPlus',
    industry: 'E-commerce',
    challenge: 'Customer support tickets were piling up during peak seasons, leading to long wait times and frustrated customers.',
    solution: 'Deployed intelligent chatbots for instant customer support with escalation protocols for complex issues.',
    results: [
    { metric: 'Response Time', improvement: '92% reduction', icon: 'ClockIcon' },
    { metric: 'Customer Satisfaction', improvement: '+43%', icon: 'StarIcon' },
    { metric: 'Support Costs', improvement: '-58%', icon: 'ArrowDownIcon' },
    { metric: 'Resolution Rate', improvement: '89% first contact', icon: 'CheckCircleIcon' }],

    testimonial: "Our customers love the instant responses, and our support team can focus on complex issues that truly need human expertise.",
    author: 'Michael Rodriguez',
    position: 'Customer Experience Director',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111874aba-1762274570522.png",
    alt: 'Hispanic man with short dark hair in white dress shirt smiling warmly',
    aiType: 'chatbot'
  },
  {
    id: 'healthfirst-booking',
    company: 'HealthFirst Clinics',
    industry: 'Healthcare',
    challenge: 'Manual appointment scheduling was time-consuming and prone to errors, affecting patient satisfaction.',
    solution: 'Integrated hybrid AI system combining voice and chat for appointment booking, reminders, and patient communication.',
    results: [
    { metric: 'Booking Efficiency', improvement: '+156%', icon: 'CalendarDaysIcon' },
    { metric: 'No-Show Rate', improvement: '-67%', icon: 'ArrowDownIcon' },
    { metric: 'Patient Satisfaction', improvement: '+78%', icon: 'HeartIcon' },
    { metric: 'Staff Productivity', improvement: '+45%', icon: 'UserIcon' }],

    testimonial: "The AI system handles routine scheduling perfectly while maintaining the personal touch our patients expect. It's been a game-changer for our operations.",
    author: 'Dr. Emily Watson',
    position: 'Chief Medical Officer',
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    alt: 'Professional woman with blonde hair in white medical coat smiling confidently',
    aiType: 'hybrid'
  }];


  const getAITypeColor = (type: string) => {
    switch (type) {
      case 'calling':return 'bg-primary/20 text-primary';
      case 'chatbot':return 'bg-secondary/20 text-secondary';
      case 'hybrid':return 'bg-accent/20 text-accent';
      default:return 'bg-muted text-text-secondary';
    }
  };

  const getAITypeName = (type: string) => {
    switch (type) {
      case 'calling':return 'Voice AI';
      case 'chatbot':return 'Chat AI';
      case 'hybrid':return 'Hybrid AI';
      default:return 'AI Solution';
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism border border-success/30 mb-6">
            <Icon name="TrophyIcon" size={16} className="text-success mr-2" />
            <span className="text-sm font-medium text-success">Success Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary">
            See how companies across industries have transformed their operations with our AI solutions. 
            These aren't just case studies—they're blueprints for your success.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) =>
          <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAITypeColor(study.aiType)}`}>
                    {getAITypeName(study.aiType)}
                  </span>
                  <span className="text-sm text-text-secondary">{study.industry}</span>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                  {study.company}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-2 flex items-center">
                      <Icon name="ExclamationTriangleIcon" size={18} className="text-error mr-2" />
                      Challenge
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-2 flex items-center">
                      <Icon name="LightBulbIcon" size={18} className="text-accent mr-2" />
                      Solution
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {study.results.map((result, resultIndex) =>
                <div key={resultIndex} className="p-4 glassmorphism rounded-lg border border-border/50 text-center">
                      <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon name={result.icon as any} size={16} className="text-success" />
                      </div>
                      <div className="font-display text-lg text-success mb-1">{result.improvement}</div>
                      <div className="text-xs text-text-secondary">{result.metric}</div>
                    </div>
                )}
                </div>

                {/* Testimonial */}
                <div className="glassmorphism rounded-xl p-6 border border-border/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <AppImage
                      src={study.image}
                      alt={study.alt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1">
                      <blockquote className="text-foreground italic mb-3">
                        "{study.testimonial}"
                      </blockquote>
                      <div>
                        <div className="font-medium text-foreground">{study.author}</div>
                        <div className="text-sm text-text-secondary">{study.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 border border-border/50">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon name="ChartBarIcon" size={40} className="text-primary" />
                        </div>
                        <h4 className="font-heading text-xl text-foreground mb-2">Performance Dashboard</h4>
                        <p className="text-text-secondary text-sm">
                          Real-time metrics and KPI tracking for {study.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating metrics */}
                  <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-2 rounded-lg font-medium text-sm shadow-lg">
                    <Icon name="TrendingUpIcon" size={16} className="inline mr-1" />
                    Live Results
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our AI solutions. 
              Let's discuss how we can deliver similar results for your company.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg magnetic-cta constellation-glow transition-all duration-300">
                <Icon name="CalendarDaysIcon" size={20} className="mr-3" />
                Schedule Strategy Call
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-heading text-lg rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Icon name="DocumentTextIcon" size={20} className="mr-3" />
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CaseStudiesSection;