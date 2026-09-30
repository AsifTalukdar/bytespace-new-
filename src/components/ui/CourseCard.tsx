import Image from 'next/image';

interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  students: number;
  price: number;
  lessons?: number;
  duration?: string;
  comments?: number;
  level?: string;
}

export default function CourseCard({ 
  image, title, author, rating, students, price, 
  lessons = 17, duration = "2 hours 16 mins", comments = 59, level = "Beginner" 
}: CourseCardProps) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-4 transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Image with overlay pills */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-[24px]">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        
        {/* Overlay pills */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto no-scrollbar">
          <div className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-gray-900 whitespace-nowrap">
            {lessons} Lessons
          </div>
          <div className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-gray-900 whitespace-nowrap">
            {duration}
          </div>
          <div className="rounded-full bg-white/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-gray-900 whitespace-nowrap">
            {comments} Comments
          </div>
        </div>
      </div>
      
      <div className="mt-5 px-1 pb-2">
        {/* Title & Rating */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] leading-tight line-clamp-1 text-gray-950">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-[15px] text-gray-500 font-medium whitespace-nowrap">
            {rating} <span className="text-gray-300">★</span>
          </div>
        </div>
        
        {/* Author */}
        <p className="text-[13px] text-gray-500 mt-1">
          by <span className="text-blue-600">{author}</span>
        </p>
        
        {/* Level and Avatars */}
        <div className="mt-5 flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 10.5V6M6 10.5V1.5M10.5 10.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {level}
          </div>
          
          <div className="flex -space-x-2">
            {/* Mock avatar circles */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white overflow-hidden bg-gray-200 text-gray-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            ))}
            <div className="z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-400 text-[9px] font-bold text-gray-950">
              {students}+
            </div>
          </div>
        </div>
        
        {/* Price */}
        <div className="mt-6">
          <p className="font-poppins text-[22px] font-bold text-blue-600">
            ${price}<span className="font-sans text-sm font-medium text-gray-400">/lifetime</span>
          </p>
        </div>
      </div>
    </div>
  );
}
