'use client';

import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import ServiceFilters from './ServiceFilters';
import ROICalculator from './ROICalculator';
import Icon from '@/components/ui/AppIcon';

interface ServiceFeature {
  name: string;
  description: string;
  icon: string;
}

interface ServiceIntegration {
  name: string;
  logo: string;
  alt: string;
  compatibility: 'Full' | 'Partial' | 'Custom';
}

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: ServiceFeature[];
  integrations: ServiceIntegration[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: string;
  };
  image: string;
  alt: string;
}

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

export default function ServicesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [roiCalculator, setROICalculator] = useState<{isOpen: boolean;serviceId: string;serviceName: string;}>({
    isOpen: false,
    serviceId: '',
    serviceName: ''
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockServices: Service[] = [
  {
    id: 'ai-calling-agents',
    title: 'AI Calling Agents',
    description: 'Intelligent voice agents that handle customer inquiries, lead qualification, and appointment scheduling with human-like conversation capabilities.',
    category: 'AI Solutions',
    features: [
    { name: 'Natural Language Processing', description: 'Advanced NLP for human-like conversations', icon: 'ChatBubbleLeftRightIcon' },
    { name: 'Multi-language Support', description: 'Support for 40+ languages and dialects', icon: 'LanguageIcon' },
    { name: 'CRM Integration', description: 'Seamless integration with popular CRM systems', icon: 'CircleStackIcon' },
    { name: 'Real-time Analytics', description: 'Live call monitoring and performance metrics', icon: 'ChartBarIcon' },
    { name: 'Custom Voice Training', description: 'Train agents with your brand voice and tone', icon: 'SpeakerWaveIcon' },
    { name: '24/7 Availability', description: 'Round-the-clock customer service coverage', icon: 'ClockIcon' }],

    integrations: [
    { name: 'Salesforce', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_116df7f00-1763029956368.png", alt: 'Salesforce CRM platform logo', compatibility: 'Full' },
    { name: 'HubSpot', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_163e6f132-1763029956392.png", alt: 'HubSpot marketing platform logo', compatibility: 'Full' },
    { name: 'Twilio', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_112d98d91-1763029957572.png", alt: 'Twilio communication platform logo', compatibility: 'Full' },
    { name: 'Zapier', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10f37c044-1763029956967.png", alt: 'Zapier automation platform logo', compatibility: 'Partial' }],

    pricing: { starter: 299, professional: 599, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1712002641124-2950ba667e78",
    alt: 'Modern AI interface showing voice waveforms and conversation analytics on dark background'
  },
  {
    id: 'chatbot-solutions',
    title: 'Intelligent Chatbots',
    description: 'AI-powered chatbots that provide instant customer support, lead generation, and seamless user experiences across multiple platforms.',
    category: 'AI Solutions',
    features: [
    { name: 'Conversational AI', description: 'Advanced AI for natural conversations', icon: 'ChatBubbleBottomCenterTextIcon' },
    { name: 'Multi-platform Deploy', description: 'Deploy across web, mobile, and social media', icon: 'DevicePhoneMobileIcon' },
    { name: 'Lead Qualification', description: 'Intelligent lead scoring and routing', icon: 'UserGroupIcon' },
    { name: 'Knowledge Base Integration', description: 'Connect to existing documentation', icon: 'BookOpenIcon' },
    { name: 'Sentiment Analysis', description: 'Real-time emotion and intent detection', icon: 'FaceSmileIcon' },
    { name: 'Handoff to Humans', description: 'Seamless escalation to human agents', icon: 'ArrowRightCircleIcon' }],

    integrations: [
    { name: 'WhatsApp Business', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9b06edd-1763029956951.png", alt: 'WhatsApp Business messaging platform logo', compatibility: 'Full' },
    { name: 'Facebook Messenger', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17887e720-1763029956592.png", alt: 'Facebook Messenger chat platform logo', compatibility: 'Full' },
    { name: 'Slack', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5253503-1763029957016.png", alt: 'Slack team communication platform logo', compatibility: 'Full' },
    { name: 'WordPress', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_197b50b0d-1763029957343.png", alt: 'WordPress content management system logo', compatibility: 'Partial' }],

    pricing: { starter: 199, professional: 399, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1675023035272-3426884896f8",
    alt: 'Futuristic chatbot interface with message bubbles and AI responses on blue gradient background'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation services that modernize your business processes, technology stack, and customer experiences.',
    category: 'Enterprise Solutions',
    features: [
    { name: 'Process Automation', description: 'Streamline workflows with intelligent automation', icon: 'Cog6ToothIcon' },
    { name: 'Cloud Migration', description: 'Secure migration to modern cloud platforms', icon: 'CloudIcon' },
    { name: 'Data Analytics', description: 'Advanced analytics and business intelligence', icon: 'ChartPieIcon' },
    { name: 'API Development', description: 'Custom APIs for system integration', icon: 'CodeBracketIcon' },
    { name: 'Security Implementation', description: 'Enterprise-grade security measures', icon: 'ShieldCheckIcon' },
    { name: 'Change Management', description: 'Comprehensive training and adoption support', icon: 'AcademicCapIcon' }],

    integrations: [
    { name: 'Microsoft Azure', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa87fdea-1763029957341.png", alt: 'Microsoft Azure cloud platform logo', compatibility: 'Full' },
    { name: 'AWS', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16cb32da0-1763029957234.png", alt: 'Amazon Web Services cloud platform logo', compatibility: 'Full' },
    { name: 'Google Cloud', logo: "https://images.unsplash.com/photo-1728710718080-3cf64d995d2c", alt: 'Google Cloud Platform logo', compatibility: 'Full' },
    { name: 'SAP', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13933e5eb-1763029957854.png", alt: 'SAP enterprise software platform logo', compatibility: 'Custom' }],

    pricing: { starter: 2999, professional: 5999, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1728305932525-a6d4b73a67b3",
    alt: 'Digital transformation concept with interconnected network nodes and data streams in space'
  },
  {
    id: 'web-development',
    title: 'Custom Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    category: 'Development',
    features: [
    { name: 'Responsive Design', description: 'Mobile-first, cross-device compatibility', icon: 'ComputerDesktopIcon' },
    { name: 'Performance Optimization', description: 'Lightning-fast loading and interactions', icon: 'BoltIcon' },
    { name: 'SEO Optimization', description: 'Built-in search engine optimization', icon: 'MagnifyingGlassIcon' },
    { name: 'E-commerce Integration', description: 'Secure payment and shopping features', icon: 'ShoppingCartIcon' },
    { name: 'Content Management', description: 'Easy-to-use admin interfaces', icon: 'PencilSquareIcon' },
    { name: 'Analytics Integration', description: 'Comprehensive tracking and insights', icon: 'ChartBarSquareIcon' }],

    integrations: [
    { name: 'Shopify', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_177852c6f-1763029959385.png", alt: 'Shopify e-commerce platform logo', compatibility: 'Full' },
    { name: 'Stripe', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1555f2f8c-1763029958508.png", alt: 'Stripe payment processing platform logo', compatibility: 'Full' },
    { name: 'Google Analytics', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1683b261b-1763029955754.png", alt: 'Google Analytics tracking platform logo', compatibility: 'Full' },
    { name: 'Mailchimp', logo: "https://images.unsplash.com/photo-1668440621025-d1f36e9eb7b4", alt: 'Mailchimp email marketing platform logo', compatibility: 'Partial' }],

    pricing: { starter: 1999, professional: 3999, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1635181951411-882166210167",
    alt: 'Modern web development workspace with multiple screens showing code and responsive design layouts'
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Intelligent marketing automation platforms that nurture leads, personalize customer journeys, and maximize conversion rates.',
    category: 'Marketing',
    features: [
    { name: 'Lead Nurturing', description: 'Automated email sequences and follow-ups', icon: 'EnvelopeIcon' },
    { name: 'Behavioral Tracking', description: 'Track user actions and engagement', icon: 'EyeIcon' },
    { name: 'A/B Testing', description: 'Optimize campaigns with split testing', icon: 'BeakerIcon' },
    { name: 'Social Media Integration', description: 'Multi-platform social media management', icon: 'ShareIcon' },
    { name: 'ROI Analytics', description: 'Detailed campaign performance metrics', icon: 'CurrencyDollarIcon' },
    { name: 'Customer Segmentation', description: 'Advanced audience targeting and personalization', icon: 'UsersIcon' }],

    integrations: [
    { name: 'HubSpot', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_162e9784d-1763029956951.png", alt: 'HubSpot marketing automation platform logo', compatibility: 'Full' },
    { name: 'Mailchimp', logo: "https://images.unsplash.com/photo-1668440621025-d1f36e9eb7b4", alt: 'Mailchimp email marketing platform logo', compatibility: 'Full' },
    { name: 'Facebook Ads', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6fe33bc-1763029955304.png", alt: 'Facebook Ads advertising platform logo', compatibility: 'Full' },
    { name: 'Google Ads', logo: "https://images.unsplash.com/photo-1704643009454-6edd37f4fbf1", alt: 'Google Ads advertising platform logo', compatibility: 'Partial' }],

    pricing: { starter: 799, professional: 1599, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    alt: 'Marketing automation dashboard showing campaign analytics and customer journey flows'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Advanced data analytics and business intelligence solutions that transform raw data into actionable insights for strategic decision-making.',
    category: 'Analytics',
    features: [
    { name: 'Real-time Dashboards', description: 'Live data visualization and monitoring', icon: 'PresentationChartBarIcon' },
    { name: 'Predictive Analytics', description: 'AI-powered forecasting and trend analysis', icon: 'SparklesIcon' },
    { name: 'Data Integration', description: 'Connect multiple data sources seamlessly', icon: 'ArrowsRightLeftIcon' },
    { name: 'Custom Reports', description: 'Automated reporting and data exports', icon: 'DocumentChartBarIcon' },
    { name: 'Machine Learning', description: 'Advanced ML models for pattern recognition', icon: 'CpuChipIcon' },
    { name: 'Data Governance', description: 'Ensure data quality and compliance', icon: 'LockClosedIcon' }],

    integrations: [
    { name: 'Tableau', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1114c59-1763029956894.png", alt: 'Tableau data visualization platform logo', compatibility: 'Full' },
    { name: 'Power BI', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12c1f7298-1763029956392.png", alt: 'Microsoft Power BI analytics platform logo', compatibility: 'Full' },
    { name: 'Snowflake', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_118393bd6-1763029957522.png", alt: 'Snowflake data warehouse platform logo', compatibility: 'Full' },
    { name: 'BigQuery', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11cd83043-1763029956541.png", alt: 'Google BigQuery analytics platform logo', compatibility: 'Custom' }],

    pricing: { starter: 1299, professional: 2599, enterprise: 'Custom' },
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: 'Data analytics visualization with charts, graphs, and business intelligence dashboards'
  }];


  const categories: FilterOption[] = [
  { id: 'AI Solutions', label: 'AI Solutions', count: 2 },
  { id: 'Enterprise Solutions', label: 'Enterprise Solutions', count: 1 },
  { id: 'Development', label: 'Development', count: 1 },
  { id: 'Marketing', label: 'Marketing', count: 1 },
  { id: 'Analytics', label: 'Analytics', count: 1 }];


  const priceRanges: FilterOption[] = [
  { id: 'under-500', label: 'Under $500', count: 2 },
  { id: '500-1000', label: '$500 - $1,000', count: 1 },
  { id: '1000-2000', label: '$1,000 - $2,000', count: 2 },
  { id: 'over-2000', label: 'Over $2,000', count: 1 }];


  const integrations: FilterOption[] = [
  { id: 'salesforce', label: 'Salesforce', count: 1 },
  { id: 'hubspot', label: 'HubSpot', count: 2 },
  { id: 'google', label: 'Google Services', count: 3 },
  { id: 'microsoft', label: 'Microsoft', count: 2 }];


  const filteredServices = mockServices.filter((service) => {
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    const matchesSearch = !searchQuery ||
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.features.some((feature) => feature.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesPriceRange = !selectedPriceRange || (() => {
      const starter = service.pricing.starter;
      switch (selectedPriceRange) {
        case 'under-500':return starter < 500;
        case '500-1000':return starter >= 500 && starter < 1000;
        case '1000-2000':return starter >= 1000 && starter < 2000;
        case 'over-2000':return starter >= 2000;
        default:return true;
      }
    })();

    const matchesIntegration = !selectedIntegration ||
    service.integrations.some((integration) =>
    integration.name.toLowerCase().includes(selectedIntegration.toLowerCase())
    );

    return matchesCategory && matchesSearch && matchesPriceRange && matchesIntegration;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.starter - b.pricing.starter;
      case 'price-high':
        return b.pricing.starter - a.pricing.starter;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleConsultationRequest = (serviceId: string) => {
    if (!isHydrated) return;
    // Mock consultation request
    alert(`Consultation requested for service: ${serviceId}`);
  };

  const handleROICalculate = (serviceId: string) => {
    if (!isHydrated) return;
    const service = mockServices.find((s) => s.id === serviceId);
    if (service) {
      setROICalculator({
        isOpen: true,
        serviceId,
        serviceName: service.title
      });
    }
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedIntegration('');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-surface/30 rounded-lg w-1/3"></div>
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="h-10 bg-surface/30 rounded-lg"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) =>
                  <div key={i} className="h-8 bg-surface/30 rounded-lg"></div>
                  )}
                </div>
              </div>
              <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-surface/30 rounded-xl"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-display text-foreground mb-6">
            Our <span className="text-primary">Solutions</span> Ecosystem
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth. 
            From AI-powered automation to enterprise transformation, we deliver measurable results.
          </p>
        </div>

        {/* Results Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 p-4 glassmorphism rounded-lg">
          <div className="text-text-secondary mb-4 sm:mb-0">
            Showing <span className="text-primary font-medium">{sortedServices.length}</span> of{' '}
            <span className="text-foreground font-medium">{mockServices.length}</span> services
          </div>
          
          <div className="flex items-center space-x-4">
            <label className="text-sm text-text-secondary">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-surface/50 border border-border/30 rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">

              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ServiceFilters
              categories={categories}
              priceRanges={priceRanges}
              integrations={integrations}
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedIntegration={selectedIntegration}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onPriceRangeChange={setSelectedPriceRange}
              onIntegrationChange={setSelectedIntegration}
              onSearchChange={setSearchQuery}
              onClearFilters={clearFilters} />

          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            {sortedServices.length > 0 ?
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedServices.map((service, index) =>
              <div
                key={service.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>

                    <ServiceCard
                  {...service}
                  onConsultationRequest={handleConsultationRequest}
                  onROICalculate={handleROICalculate} />

                  </div>
              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="MagnifyingGlassIcon" size={64} className="mx-auto text-text-secondary opacity-50 mb-6" />
                <h3 className="text-xl font-heading text-foreground mb-2">No services found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg magnetic-cta constellation-glow transition-all duration-300">

                  Clear All Filters
                </button>
              </div>
            }
          </div>
        </div>

        {/* ROI Calculator Modal */}
        <ROICalculator
          serviceId={roiCalculator.serviceId}
          serviceName={roiCalculator.serviceName}
          isOpen={roiCalculator.isOpen}
          onClose={() => setROICalculator({ isOpen: false, serviceId: '', serviceName: '' })} />

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>);

}