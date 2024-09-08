'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでメール送信の処理を行います
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Stay Updated</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full md:w-64 px-4 py-2 rounded-l-md text-gray-900 mb-2 md:mb-0"
        />
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-secondary text-white rounded-r-md hover:bg-opacity-90 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
