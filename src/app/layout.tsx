import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from './fonts';
import GitHub from '../components/icons/GitHub';
import LinkedIn from '../components/icons/LinkedIn';
import Pin from '@/components/icons/Pin';

export const metadata: Metadata = {
  title: 'Ben Bromley',
  description:
    'Ben Bromley is a software engineer, musician, and AV technician.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative antialiased`}>
        {children}
        <SocialIcons />
        <footer className="mb-10 mt-4 text-center">
          <div className="p-4 text-gray-500 ml-2 text-lg gap-2">
            <p className="items-center inline-flex text-xl">
              <Pin className='inline mr-1'/>
              <span>East Midlands, UK</span>
            </p>
            <p className="text-gray-700">
              &copy; Ben Bromley {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

const SocialIcons = () => {
  return (
    <span className="absolute right-4 top-4 flex space-x-2">
      <GitHub
        className="rounded-md p-2 hover:bg-slate-800 opacity-50 hover:opacity-100"
        href="https://github.com/Ben-Bromley"
      />
      <LinkedIn
        className="rounded-md p-2 hover:bg-slate-800 opacity-50 hover:opacity-100"
        href="https://www.linkedin.com/in/ben-bromley/"
      />
    </span>
  );
};
