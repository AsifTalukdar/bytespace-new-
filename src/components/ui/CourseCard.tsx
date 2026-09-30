import Image from 'next/image';

interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  students: number;
  price: number;
}

export default function CourseCard({ image, title, author, rating, students, price }: CourseCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-4 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      
      <div className="mt-5 px-2">
        <h3 className="font-poppins font-semibold text-xl leading-tight line-clamp-1 text-gray-950">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">By {author}</p>
        
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-lime-100 px-2 py-1 rounded-md text-sm font-semibold text-gray-950">
              <span className="text-amber-500">★</span> {rating}
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-300" />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-500">+{students}</span>
          </div>
          
          <div className="font-poppins font-bold text-xl text-blue-600">${price}</div>
        </div>
      </div>
    </div>
  );
}
