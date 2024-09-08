import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keeb.box - Custom Keyboard Shop',
  description:
    'Build your perfect custom keyboard with Keeb.box. We offer a wide range of components and expert assembly services.',
  keywords: 'custom keyboard, mechanical keyboard, keycaps, switches, PCB, keyboard components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
