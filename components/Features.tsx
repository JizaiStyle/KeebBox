import { IconType } from 'react-icons';
import { FaKeyboard, FaPalette, FaTools, FaShippingFast } from 'react-icons/fa';

type FeatureProps = {
  icon: IconType;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
    <Icon className="text-4xl text-primary mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: FaKeyboard,
      title: 'Custom Builds',
      description: 'Design your perfect keyboard with our wide range of components.',
    },
    {
      icon: FaPalette,
      title: 'Unique Designs',
      description: 'Express yourself with our vast selection of keycaps and cases.',
    },
    {
      icon: FaTools,
      title: 'Expert Assembly',
      description: 'Let our skilled technicians assemble your dream keyboard.',
    },
    {
      icon: FaShippingFast,
      title: 'Fast Shipping',
      description: 'Get your custom keyboard delivered quickly and securely.',
    },
  ];

  return (
    <section className="section bg-bg-alt">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Why Choose Keeb.box?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
