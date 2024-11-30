import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./theme-config.css"


const inter = Inter({ subsets: ['latin'],
  variable: "--font-inter" });

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
      <body className={`${inter.variable}  text-[#432E54]`}>
      <Theme accentColor="purple">
        <Navbar />
        <main className="p-6">{children}</main>
      
        </Theme>
      </body>
    </html>
  );
}
