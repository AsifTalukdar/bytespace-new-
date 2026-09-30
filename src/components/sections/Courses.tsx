import CourseCard from '../ui/CourseCard';

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Writing",
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking", "+ More"
];

const mockCourses = [
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  },
  {
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600&auto=format&fit=crop",
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  },
  {
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop",
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    students: 26,
    price: 25,
  }
];

export default function Courses() {
  return (
    <section className="py-20 px-5 max-w-[1200px] mx-auto text-center" id="courses">
      <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-950 tracking-tight">
        Discover Your Passion,<br />Build Your Skills
      </h2>
      <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
        At ByteSpace, we believe learning should be life-changing. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>

      {/* Categories */}
      <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <button 
            key={cat}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              i === 0 
                ? 'bg-lime-400 text-gray-950 hover:brightness-95' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {mockCourses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}
