import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services'; 
import CustomerReviews from './components/CustomerReviews'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar /> 
      <Hero />
      <Features />
      <Services />
      <CustomerReviews /> 
      <Contact />
      <Footer />
    </main>
  );
}
