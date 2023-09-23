import './globals.css';
import { Nunito } from 'next/font/google';

import ToasterProvider from '@/providers/ToasterProvider';
import Navbar from '@/components/navbar/Navbar';
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import SearchModal from '@/components/modals/SearchModal';
import RentModal from '@/components/modals/RentModal';
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata = {
  title: {
    default: 'Airbrb',
    template: `%s | Airbrb`,
  },
  description:
    'Airbnb Clone using NextJS 13, TailwindCSS, MongoDB, Prisma, Next-Auth, Zustand, Leaflet, ... Inspired by "Code with Antonio"',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'MongoDB'],
  authors: [
    {
      name: 'Merlin Förster',
      url: 'https://merlin.hamburg',
    },
  ],
  creator: 'Merlin Förster',
  themeColor: 'white',
  openGraph: {
    type: 'website',
    locale: 'en_DE',
    url: 'https://airbrb.merlin.hamburg',
    title: 'Airbrb',
    description:
      'Airbnb Clone using NextJS 13, TailwindCSS, MongoDB, Prisma, Next-Auth, Zustand, Leaflet, ... Inspired by "Code with Antonio"',
    siteName: 'Airbrb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbrb',
    description:
      'Airbnb Clone using NextJS 13, TailwindCSS, MongoDB, Prisma, Next-Auth, Zustand, Leaflet, ... Inspired by "Code with Antonio"',
    images: ['https://airbrb.merlin.hamburg/og.png'],
    creator: '@merlinfoerster',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'https://airbrb.merlin.hamburg/site.webmanifest',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
