import { BRAND_ASSETS } from './data/assets';
import { FEATURES } from './data/content';
import { Layout } from './components/layout/Layout';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { Pqrs } from './components/sections/Pqrs';
import { ProductDemo } from './components/sections/ProductDemo';
import { Waitlist } from './components/sections/Waitlist';
import { sendPqrs } from './services/sendPqrs';
import type { PqrsFormData, PqrsType, WaitlistFormData } from './types';

function scrollToWaitlist(): void {
  document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
}

function handleWaitlistSubmit(data: WaitlistFormData): void {
  console.info('Lead capturado:', data);
}

async function handlePqrsSubmit(data: PqrsFormData): Promise<void> {
  if (!data.type) {
    throw new Error('Selecciona el tipo de PQRS');
  }

  await sendPqrs({
    ...data,
    type: data.type as PqrsType,
  });
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
      <Pqrs onSubmit={handlePqrsSubmit} />
    </Layout>
  );
}
