import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="bg-grid relative overflow-hidden bg-blue-800 py-32 px-5 text-center text-white">
      {/* 3D Shapes (Export these from Figma if you want them floating around!) */}
      {/* <Image src="/images/cta-shapes.png" alt="Shapes" fill className="object-cover opacity-80 pointer-events-none" /> */}
      
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
