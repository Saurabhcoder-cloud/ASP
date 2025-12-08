import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - ASP Global Solutions',
  description: 'Digital solutions that scale with your ambition. Where technical excellence meets business growth with measurable results and enterprise-grade AI automation.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <HomepageInteractive />
    </>
  );
}