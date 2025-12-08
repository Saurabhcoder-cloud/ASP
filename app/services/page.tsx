import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - ASP Global Solutions',
  description: 'Comprehensive digital solutions including AI calling agents, chatbots, web development, and enterprise transformation services designed to accelerate business growth.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <ServicesInteractive />
      </div>
    </main>
  );
}