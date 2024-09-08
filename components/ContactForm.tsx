'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここで実際のフォーム送信処理を実装します。
    // 例: APIエンドポイントにPOSTリクエストを送信する
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-primary">Thank You!</h2>
        <p className="text-gray-600">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <section className="section bg-bg-alt">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto animate-slide-in">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button type="submit" className="w-full btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
