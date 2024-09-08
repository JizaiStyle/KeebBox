import Image from 'next/image';

type ProductProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const Product = ({ name, description, price, image }: ProductProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
    <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 h-16 overflow-hidden">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
        <button className="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default function Products() {
  const products = [
    {
      name: 'Custom TKL Keyboard',
      description: 'Tenkeyless mechanical keyboard with hot-swappable switches',
      price: 149.99,
      image: 'https://placehold.co/300x200?text=TKL+Keyboard',
    },
    {
      name: 'Artisan Keycap Set',
      description: 'Hand-crafted resin keycaps for a unique look',
      price: 79.99,
      image: 'https://placehold.co/300x200?text=Artisan+Keycaps',
    },
    {
      name: 'Lubed Switches Pack',
      description: 'Pre-lubed premium mechanical switches for smooth typing',
      price: 39.99,
      image: 'https://placehold.co/300x200?text=Lubed+Switches',
    },
    {
      name: 'Custom Cable',
      description: 'Colorful coiled USB-C cable for your setup',
      price: 29.99,
      image: 'https://placehold.co/300x200?text=Custom+Cable',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
