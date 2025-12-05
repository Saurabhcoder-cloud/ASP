import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PricingHero from './components/PricingHero';
import PricingInteractive from './components/PricingInteractive';

export const metadata: Metadata = {
  title: 'Pricing - ASP Global Solutions',
  description: 'Transparent pricing for AI solutions and digital transformation services. Flexible plans from startup-friendly packages to enterprise transformations with ROI guarantees.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PricingHero className="pt-16 lg:pt-20" />
      
      {/* Interactive Pricing Components */}
      <PricingInteractive />
    </main>
  );
}