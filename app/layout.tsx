import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';
import { formattedPhoneNumber } from '@/constants';

import Layout from '@/components/Layout';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lora = Lora({
  weight: ['500', '700'],
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Van Gemert Memorials | Green Bay, WI | ${formattedPhoneNumber}`,
  description:
    'Van Gemert Memorials, providing the highest quality craftmanship and service to Northeast Wisconsin for over 100 years.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
