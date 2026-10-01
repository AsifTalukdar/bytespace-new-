import Image from "next/image";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-32 px-5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#d4fb20]/30 rounded-full blur-[140px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-[40%] right-0 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[140px] -z-10 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d4fb20]/20 rounded-full blur-[140px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto">
        {/* Feature 1 — Your Path to Professional Growth */}
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

          {/* Right side: Student + Course Card + Learning Progress + Shapes */}
          <div className="flex-1 relative w-full h-[500px] md:h-[580px]">
            {/* Lime zig-zag shape (top right) */}
            <div className="absolute -right-4 top-16 md:right-0 md:top-8 z-10">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M10 70C10 70 20 50 30 55C40 60 35 35 45 40C55 45 50 20 60 25C70 30 65 10 75 15" stroke="#D4FB20" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="absolute -right-2 top-40 md:right-4 md:top-36 z-10">
              <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                <path d="M10 70C10 70 20 50 30 55C40 60 35 35 45 40C55 45 50 20 60 25C70 30 65 10 75 15" stroke="#D4FB20" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Mini Course Card floating top-left */}
            <div className="absolute left-0 top-0 z-20 w-[200px] md:w-[240px] rounded-2xl bg-white p-3 shadow-xl border border-gray-100">
              <div className="relative w-full h-[120px] md:h-[140px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex gap-1.5">
                  <span className="rounded-full bg-white/80 backdrop-blur-md px-2 py-1 text-[10px] font-semibold text-gray-900">17 Lessons</span>
                  <span className="rounded-full bg-white/80 backdrop-blur-md px-2 py-1 text-[10px] font-semibold text-gray-900">2 hours 16 mins</span>
                </div>
              </div>
              <div className="mt-3 px-1">
                <p className="font-poppins font-semibold text-sm text-gray-950 truncate">Learn Figma fro...</p>
                <p className="text-[11px] text-gray-500">by <span className="text-blue-600">purepearl studio</span></p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600 flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1.5 10.5V6M6 10.5V1.5M10.5 10.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Beginner
                  </span>
                </div>
                <p className="mt-2 font-poppins text-lg font-bold text-blue-600">$25<span className="text-xs font-normal text-gray-400">/lifetime</span></p>
              </div>
            </div>

            {/* Student image (center-right) */}
            <div className="absolute left-[80px] top-[60px] md:left-[120px] md:top-[40px] w-[280px] h-[400px] md:w-[360px] md:h-[500px] z-10">
              <Image
                src="/images/hero-student.png"
                alt="Student learning"
                fill
                sizes="(max-width: 768px) 280px, 360px"
                className="object-cover object-top"
              />
            </div>

            {/* Learning Progress floating card (right) */}
            <div className="absolute right-0 top-[140px] md:right-4 md:top-[160px] z-30 rounded-2xl bg-white p-5 shadow-xl border border-gray-100 w-[180px]">
              <p className="text-sm font-medium text-gray-600">Learning Progress</p>
              <p className="font-poppins text-4xl md:text-5xl font-semibold text-gray-950 mt-1">55%</p>
              <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-[56%] rounded-full bg-lime-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 — Create & Manage Courses Easily */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left side: Student + Revenue Cards + Happy Students */}
          <div className="flex-1 relative w-full h-[500px] md:h-[580px]">
            {/* Lime zig-zag shape (right of student) */}
            <div className="absolute right-[60px] top-[120px] md:right-[100px] md:top-[100px] z-20">
              <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                <path d="M10 70C10 70 20 50 30 55C40 60 35 35 45 40C55 45 50 20 60 25C70 30 65 10 75 15" stroke="#D4FB20" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="absolute right-[40px] top-[180px] md:right-[80px] md:top-[170px] z-20">
              <svg width="50" height="50" viewBox="0 0 80 80" fill="none">
                <path d="M10 70C10 70 20 50 30 55C40 60 35 35 45 40C55 45 50 20 60 25C70 30 65 10 75 15" stroke="#D4FB20" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Total Revenue floating card */}
            <div className="absolute left-0 top-[40px] md:left-4 md:top-[60px] z-30 rounded-2xl bg-blue-700 p-4 shadow-xl text-white w-[180px]">
              <p className="text-xs font-medium opacity-80">Total Revenue</p>
              <p className="text-[10px] opacity-60">July 1-28</p>
              <p className="font-poppins text-2xl font-bold mt-1">$120.29</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-blue-500">
                <div className="h-1.5 w-[70%] rounded-full bg-lime-400" />
              </div>
            </div>

            {/* Student image (center) */}
            <div className="absolute left-[60px] top-[20px] md:left-[80px] md:top-0 w-[280px] h-[420px] md:w-[340px] md:h-[520px] z-10">
              <Image
                src="/images/image-1.png"
                alt="Creator with tablet"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Year to Date floating card */}
            <div className="absolute left-0 top-[200px] md:left-2 md:top-[260px] z-30 rounded-2xl bg-blue-700 p-4 shadow-xl text-white w-[180px]">
              <p className="text-xs font-medium opacity-80">Year to Date</p>
              <p className="text-[10px] opacity-60">2023</p>
              <p className="font-poppins text-2xl font-bold mt-1">$1,200.38</p>
              <div className="mt-2 flex items-center gap-1">
                <span className="rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-bold text-gray-950">+12%</span>
              </div>
            </div>

            {/* Happy Students floating card */}
            <div className="absolute left-[140px] bottom-[20px] md:left-[160px] md:bottom-[10px] z-30 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 w-[220px]">
              <p className="text-sm font-medium text-gray-950">Happy Students</p>
              <p className="text-xs text-gray-400"><span className="text-gray-950 font-medium">4.5</span> (240) <span className="text-amber-400">★</span></p>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-gray-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="ml-1 rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold text-gray-950">2K+</span>
              </div>
            </div>
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
