import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import FloatingCard from "@/components/ui/FloatingCard";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-blue-800 pb-0">
      <Navbar />

      {/* Decorative 3D ornaments: hidden on small screens */}
      <Image src="/images/ornament-left.png" alt="" width={385} height={385}
        className="pointer-events-none absolute -left-24 top-56 hidden xl:block" />
      <Image src="/images/ornament-right.png" alt="" width={370} height={370}
        className="pointer-events-none absolute -right-16 top-56 hidden xl:block" />
      <Image src="/images/ornament-ring.png" alt="" width={342} height={342}
        className="pointer-events-none absolute -left-4 bottom-0 hidden xl:block" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 pt-10 text-center md:pt-6 xl:px-0">
        <h1 className="max-w-[935px] font-poppins text-4xl leading-[1.2] font-semibold tracking-tight text-white sm:text-5xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-6 max-w-[700px] text-base leading-[1.6] text-gray-100 md:mt-8 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="mt-10 flex w-full max-w-[600px] flex-col gap-4 sm:flex-row md:mt-[60px]" role="search">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-3xl bg-white px-6">
            <Image src="/images/search.svg" alt="" width={24} height={24} />
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg text-gray-950 outline-none placeholder:text-gray-400"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {/* Student + lime circle + floating cards */}
      <div className="relative mx-auto mt-12 h-[420px] w-full max-w-[1200px] md:h-[512px]">
        <div className="absolute bottom-[-300px] left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-lime-400 md:bottom-[-560px] md:size-[1149px]" />
        <div className="absolute bottom-0 left-1/2 h-[340px] w-[320px] -translate-x-1/2 md:h-[512px] md:w-[578px]">
          <Image src="/images/hero-student.png" alt="Smiling student with headphones and laptop"
            fill priority sizes="(max-width: 768px) 320px, 578px" className="object-cover object-top" />
        </div>

        <FloatingCard className="left-4 top-4 md:left-[280px] md:top-[127px]">
          <p className="text-base font-medium">UI/UX Design</p>
          <p className="text-xs text-gray-400">200 Courses • 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="right-4 top-24 md:left-[722px] md:right-auto md:top-[139px]">
          <p className="text-sm font-medium">Learning Progress</p>
          <p className="font-poppins text-3xl font-semibold md:text-5xl">55%</p>
          <div className="mt-2 h-2 w-[160px] rounded-3xl bg-gray-50 md:w-[200px]">
            <div className="h-2 w-[56%] rounded-3xl bg-lime-400" />
          </div>
        </FloatingCard>

        <FloatingCard className="bottom-4 left-4 hidden sm:block md:left-[208px] md:bottom-10 md:w-[258px]">
          <p className="text-base font-medium">Happy Students</p>
          <p className="text-xs text-gray-400"><span className="text-gray-950">4.5</span> (240) ★</p>
          <p className="mt-2 text-xs font-bold">2K+</p>
        </FloatingCard>
      </div>
    </section>
  );
}