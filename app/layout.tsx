import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/UI/NavBar/NavBar';
import Footer from '@/components/UI/Footer/Footer';
import { Urbanist } from 'next/font/google';
import { Lexend } from 'next/font/google';
import { Red_Hat_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });
const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  title: 'SkyEdge Digital',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` antialiased ${urbanist.variable} ${lexend.variable} ${redHatDisplay.variable}`}
      >
        <Analytics />
        <NavBar />
        {/* <main className='min-h-[calc(100vh-100px)] border-4 border-green-600'> */}
        {children}
        {/* </main> */}
        <Footer />
      </body>
    </html>
  );
}
