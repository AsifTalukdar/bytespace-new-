import Image from "next/image";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-32 px-5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#d4fb20]/30 rounded-full blur-[140px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-[40%] right-0 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[140px] -z-10 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d4fb20]/20 rounded-full blur-[140px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-40">
          <div className="flex-1 lg:pr-10">
            <h2 className="text-[32px] md:text-[44px] font-bold font-poppins text-gray-950 leading-[1.2] tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-[15px] text-gray-500 leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-10 flex gap-8 md:gap-14">
              <div>
                <h3 className="text-3xl md:text-[32px] font-bold font-poppins text-blue-700">12K</h3>
                <p className="text-[13px] text-gray-500 mt-1">Students</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-[32px] font-bold font-poppins text-blue-700">70+</h3>
                <p className="text-[13px] text-gray-500 mt-1">Courses</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-[32px] font-bold font-poppins text-blue-700">16</h3>
                <p className="text-[13px] text-gray-500 mt-1">Creators</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full h-[450px] md:h-[650px] flex items-center justify-center">
            <Image src="/images/Frame 8.png" alt="Path to growth" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
          <div className="flex-1 relative w-full h-[450px] md:h-[650px] flex items-center justify-center">
            <Image src="/images/Image1.png" alt="Create courses" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
          </div>

          <div className="flex-1 lg:pl-16">
            <h2 className="text-[32px] md:text-[44px] font-bold font-poppins text-gray-950 leading-[1.2] tracking-tight">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-6 text-[15px] text-gray-500 leading-relaxed max-w-lg mb-8">
              <span className="font-bold text-gray-950">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                  <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
