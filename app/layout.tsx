import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation/navigation';

export const metadata: Metadata = {
  title: 'Quick Notes',
  description:
    'A quick notes application where you can just add anything instantly and save it.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ maxWidth: '1100px', margin: 'auto'}}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
