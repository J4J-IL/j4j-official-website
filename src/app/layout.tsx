import { Header } from '@j4j/components';
import './globals.css';
import { Inter } from 'next/font/google';
import { HeadLines } from '@/components/headLines/HeadLines';
import { Footer, Header } from '@j4j/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'J4J Community',
  description: 'Welcome to J4J Community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
