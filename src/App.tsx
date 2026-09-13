import { BRAND_ASSETS } from './data/assets';
import { FEATURES } from './data/content';
import { Layout } from './components/layout/Layout';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { ProductDemo } from './components/sections/ProductDemo';
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
      <ProductDemo
        videoSrc={BRAND_ASSETS.trazzaDemo}
        posterSrc={BRAND_ASSETS.trazzaBrand}
        brandImageSrc={BRAND_ASSETS.trazzaBrand}
      />
      <Features items={FEATURES} />
      <Waitlist onSubmit={handleWaitlistSubmit} />
    </Layout>
  );
}
