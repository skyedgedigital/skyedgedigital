import LogosScroll from '@/components/UI/LogosScroll';
import ContactForm from '@/components/UI/Forms/ContactForm';
import HeroSection from '@/components/UI/Home/HeroSection';
import ServicesSection from '@/components/UI/Home/Services/ServicesSection';
import ReviewScroll from '@/components/UI/Reviews/ReviewScroll';

export default function Home() {
  return (
    <main className='bg-[#141414] overflow-hidden'>
      <HeroSection />
      <LogosScroll />
      <ServicesSection />
      <ReviewScroll />
      <ContactForm />
    </main>
  );
}
