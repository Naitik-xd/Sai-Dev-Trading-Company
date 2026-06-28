import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, WhyChooseUs } from './components/About';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
