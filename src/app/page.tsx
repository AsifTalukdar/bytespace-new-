import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Courses from "@/components/sections/Courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Courses />
      {/* Next: Categories, Features, CTA, Testimonials, Footer */}
    </main>
  );
}