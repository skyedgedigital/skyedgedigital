import BrandScroll from '@/components/UI/BrandScroll';
import HeroSection from '@/components/UI/Home/HeroSection';
import ServicesSection from '@/components/UI/Home/Services/ServicesSection';

export default function Home() {
  return (
    <main className='bg-[#141414]'>
      <HeroSection />
      <BrandScroll />
      <ServicesSection />
    </main>
  );
}
