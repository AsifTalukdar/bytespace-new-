import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Courses />
      <Categories />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}