import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from './components/shared/Footer';
import { CartProvider } from '@/state';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kingly',
  description: 'Kingly food app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-left" reverseOrder={false} />
      <CartProvider>
        <body className={inter.className}>
          {/* <div className="w-full h-full px-[16px] md:px-[60px] "> */}
          {/* <div className="w-full h-full px-[16px] md:px-[60px] "> */}
          {/* <Navbar /> */}
          {/* </div> */}
          {children}
          <Footer />
          {/* </div> */}
        </body>
      </CartProvider>
    </html>
  );
}
