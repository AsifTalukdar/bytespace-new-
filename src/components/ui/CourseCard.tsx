import Image from "next/image";

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
  avatars?: string[];
}

const defaultAvatars = [
  "/images/avatars/avatar-1.png",
  "/images/avatars/avatar-2.png",
  "/images/avatars/avatar-3.png",
  "/images/avatars/avatar-4.png",
];

export default function CourseCard({
  image,
  title,
  author,
  rating,
  students,
  price,
  lessons = 17,
  duration = "2 hours 16 mins",
  comments = 59,
  level = "Beginner",
  avatars = defaultAvatars,
}: CourseCardProps) {
  const pills = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <article className="overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white p-[15px] transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Cover image with glass pills */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
          className="object-cover"
        />
        <div className="absolute bottom-[13px] left-[13px] right-[13px] flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pills.map((p) => (
            <span
              key={p}
              className="shrink-0 whitespace-nowrap rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-satoshi text-xs font-medium text-[#4f4f4f] backdrop-blur-[4px]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-[16px] flex flex-col gap-4 pb-1">
        {/* Rating (top right) */}
        <div className="absolute right-0 top-0 flex items-center font-satoshi text-[18px] leading-[1.6] text-[#4f4f4f]">
          <span>{rating}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ced0d3" aria-hidden="true">
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>

        {/* Title + author */}
        <div className="pr-14">
          <h3 className="truncate font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] text-black">
            {title}
          </h3>
          <p className="font-satoshi text-xs leading-[1.6] text-[#4f4f4f]">
            by <span className="text-blue-800">{author}</span>
          </p>
        </div>

        {/* Level + avatars */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center gap-1 rounded-3xl bg-gray-50 px-3 py-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4b4c53" aria-hidden="true">
              <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
            </svg>
            <span className="font-satoshi text-xs font-medium text-[#4b4c53]">{level}</span>
          </div>

          <div className="flex items-center">
            {avatars.slice(0, 4).map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className="-mr-2 size-8 rounded-full object-cover"
                style={{ zIndex: i }}
              />
            ))}
            <span className="ml-0 flex size-8 items-center justify-center rounded-full bg-lime-400 font-satoshi text-xs font-medium text-gray-950">
              {students}+
            </span>
          </div>
        </div>

        {/* Price */}
        <p className="flex items-end">
          <span className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] text-blue-800">
            ${price}
          </span>
          <span className="font-satoshi text-xs leading-[1.6] text-[#4f4f4f]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}