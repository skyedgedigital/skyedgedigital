import LogosScroll from '@/components/UI/LogosScroll';
import HeroSection from '@/components/UI/Home/HeroSection';
import ServicesSection from '@/components/UI/Home/Services/ServicesSection';
import ReviewScroll from '@/components/UI/Reviews/ReviewScroll';
import ContactFormCard from '@/components/UI/ContactFormCard/ContactFormCard';

export default function Home() {
  return (
    <main className='bg-[#141414] overflow-hidden'>
      <HeroSection />
      <LogosScroll />
      <ServicesSection />
      <ReviewScroll />
      <ContactFormCard />
    </main>
  );
}
