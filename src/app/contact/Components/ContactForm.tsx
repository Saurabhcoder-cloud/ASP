import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ContactInteractive from './ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact - ASP Global Solutions',
  description:
    'Connect with our digital transformation experts. Multiple contact channels, global offices, and enterprise-grade support for consultation scheduling and project discussions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 lg:pt-20">
        <ContactHero />
        <ContactMethods />
        <ContactInteractive />
        {/* OfficeLocations removed */}
      </main>
    </div>
  );
}
