import { Hero } from '../components/Hero';
import { About, WhyChooseUs } from '../components/About';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </main>
  );
}
