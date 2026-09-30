import React from 'react';

const categoryItems = [
  {
    name: "Design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
  {
    name: "Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    name: "IT & Software",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    name: "Business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    name: "Marketing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A3 3 0 0 1 8 17"></path>
        <path d="M15 15V8a4 4 0 0 0-4-4V3a2 2 0 1 0-4 0v1a4 4 0 0 0-4 4v7L2 17h14l-1-2z"></path>
      </svg>
    )
  },
  {
    name: "Photography",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    )
  },
];

export default function Categories() {
  return (
    <section className="py-20 px-5 max-w-[1200px] mx-auto text-center" id="categories">
      <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-gray-950 tracking-tight">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mt-5 text-gray-500 max-w-3xl mx-auto leading-relaxed">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses covers different fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
      </p>

      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {categoryItems.map((cat, i) => (
          <div key={i} className="flex flex-col items-center justify-center w-[160px] h-[160px] rounded-[32px] border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-lime-400/20 text-gray-950 flex items-center justify-center mb-4">
              {cat.icon}
            </div>
            <span className="font-poppins font-semibold text-gray-950 text-[15px]">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
