import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ValueProposition from './components/ValueProposition';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Urgency from './components/Urgency';
import CTAFinal from './components/CTAFinal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <ValueProposition />
        <Process />
        <Testimonials />
        <Urgency />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
