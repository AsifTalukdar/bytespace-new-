import Image from "next/image";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="bg-grid relative overflow-hidden bg-blue-800 py-32 px-5 text-center text-white">
      <Image src="/images/ornament-left.png" alt="" width={260} height={260}
        className="pointer-events-none absolute -left-16 -top-10 hidden opacity-90 lg:block" />
      <Image src="/images/ornament-right.png" alt="" width={240} height={240}
        className="pointer-events-none absolute -right-10 bottom-0 hidden opacity-90 lg:block" />

      <div className="relative max-w-[900px] mx-auto z-10">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-poppins mb-6 leading-tight">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>
        <p className="text-blue-50 text-[15px] md:text-base max-w-3xl mx-auto leading-relaxed mb-10 opacity-90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button>Join as Creator</Button>
      </div>
    </section>
  );
}
