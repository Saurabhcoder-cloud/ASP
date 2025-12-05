import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AISolutionsInteractive from './components/AISolutionsInteractive';

export const metadata: Metadata = {
  title: 'AI Solutions - ASP Global Solutions',
  description: 'Experience advanced AI calling agents and chatbots with live demos, technical specifications, and seamless integrations for enterprise-grade automation.',
};

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AISolutionsInteractive />
    </main>
  );
}