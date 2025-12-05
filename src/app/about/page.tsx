import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About - ASP Global Solutions',
  description: 'Meet the visionary leaders and technical experts who architect digital futures for Fortune 500 companies and scaling startups worldwide.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <AboutInteractive />
      </div>
    </main>
  );
}