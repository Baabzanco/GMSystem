import React from 'react';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import StorySection from './landing/StorySection';
import AboutSection from './landing/AboutSection';
import ProductsSection from './landing/ProductsSection';
import CalculatorSection from './landing/CalculatorSection';
import ContactSection from './landing/ContactSection';
import FAQSection from './landing/FAQSection';

export default function LandingPage() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark', 'scroll-smooth');
    document.documentElement.dir = 'rtl';
    document.body.classList.add('overflow-x-hidden');
    
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@200;300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    const fa = document.createElement('link');
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    fa.rel = 'stylesheet';
    document.head.appendChild(fa);

    return () => {
      document.body.classList.remove('overflow-x-hidden');
      document.head.removeChild(link);
      document.head.removeChild(fa);
    }
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-brand-950 text-gray-800 dark:text-gray-100 font-sans">
      <Navbar />
      <StorySection />
      <AboutSection />
      <ProductsSection />
      <CalculatorSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
