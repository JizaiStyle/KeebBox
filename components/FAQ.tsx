'use client';

import { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 transition-all duration-300 ease-in-out">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-primary">{question}</span>
        <span className="text-2xl text-primary">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`mt-2 text-gray-600 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to build and ship a custom keyboard?',
      answer:
        'Typically, it takes 2-3 weeks to build and test your custom keyboard. Shipping usually takes an additional 3-5 business days, depending on your location.',
    },
    {
      question: 'Can I return or exchange my custom keyboard?',
      answer:
        "Due to the custom nature of our products, we don't offer returns. However, if there's a defect in materials or workmanship, we offer a 30-day warranty and will repair or replace your keyboard.",
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship worldwide. International shipping rates and delivery times vary depending on the destination.',
    },
    {
      question: 'Can I change the switches on my keyboard after I receive it?',
      answer:
        'Yes, all our custom keyboards come with hot-swappable PCBs, allowing you to easily change switches without soldering.',
    },
    {
      question: 'Do you offer assembly services for kits?',
      answer:
        'Yes, we offer assembly services for an additional fee. You can select this option during checkout.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
