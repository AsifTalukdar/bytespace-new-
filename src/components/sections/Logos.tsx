import React from 'react';

const Logos = () => {
  return (
    <section className="bg-gray-50 py-10 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-center gap-10 md:justify-between items-center opacity-60">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2 font-poppins font-semibold text-xl text-gray-500">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="currentColor" />
              <path d="M2 23L16 30L30 23V16L16 23L2 16V23Z" fill="currentColor" />
            </svg>
            Logolipsum
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
