import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trace - Issue Tracker',
  description: 'A powerful issue tracker to manage and resolve tasks efficiently, built for teams and individuals.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  text-[#432E54]`}>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
