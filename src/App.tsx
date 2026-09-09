import { FEATURES } from './data/content';
import { Layout } from './components/layout/Layout';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { Waitlist } from './components/sections/Waitlist';
import type { WaitlistFormData } from './types';

function scrollToWaitlist(): void {
  document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
}

function handleWaitlistSubmit(data: WaitlistFormData): void {
  console.info('Lead capturado:', data);
}

export default function App() {
  return (
    <Layout>
      <Hero onCtaClick={scrollToWaitlist} />
      <Features items={FEATURES} />
      <Waitlist onSubmit={handleWaitlistSubmit} />
    </Layout>
  );
}
