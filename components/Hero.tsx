import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Welcome to Keeb.box
            </h1>
            <p className="text-xl mb-6 animate-slide-in">Build your perfect custom keyboard</p>
            <button
              className="btn btn-secondary animate-slide-in"
              style={{ animationDelay: '0.2s' }}
            >
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Image
              src="https://placehold.co/600x400?text=Custom+Keyboard"
              alt="Custom Keyboard"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
