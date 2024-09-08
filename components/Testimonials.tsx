import Image from 'next/image';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const Testimonial = ({ name, role, content, avatar }: TestimonialProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
    <div className="flex items-center mb-4">
      <Image src={avatar} alt={name} width={50} height={50} className="rounded-full mr-4" />
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">&ldquo;{content}&rdquo;</p>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Software Developer',
      content:
        'Keeb.box helped me build my dream keyboard. The customization options are unparalleled!',
      avatar: 'https://placehold.co/100x100?text=AJ',
    },
    {
      name: 'Sarah Lee',
      role: 'Graphic Designer',
      content:
        "The artisan keycaps I got from Keeb.box are simply stunning. They've elevated my entire setup.",
      avatar: 'https://placehold.co/100x100?text=SL',
    },
    {
      name: 'Michael Chen',
      role: 'Esports Player',
      content:
        'The responsiveness of my custom-built keyboard from Keeb.box gives me a competitive edge.',
      avatar: 'https://placehold.co/100x100?text=MC',
    },
  ];

  return (
    <section className="section bg-bg-alt">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
