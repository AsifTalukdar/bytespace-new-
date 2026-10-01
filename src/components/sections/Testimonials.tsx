import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 px-5 bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4fb20]/20 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] -z-10 -translate-x-1/2 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
          <h2 className="text-[32px] md:text-[48px] font-bold font-poppins text-gray-950 leading-[1.2] tracking-tight max-w-lg">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-lg pt-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-8 border-4 border-white shadow-md bg-gray-100">
                <Image src={t.image} alt={t.name} width={72} height={72} className="object-cover" />
              </div>
              <h3 className="font-poppins font-bold text-gray-950 text-[22px] mb-1">{t.name}</h3>
              <p className="text-blue-600 text-[15px] font-medium mb-8">{t.role}</p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
