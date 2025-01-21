import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from './fonts';
import GitHub from '../components/icons/GitHub';
import LinkedIn from '../components/icons/LinkedIn';

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
        <footer>
          <div className="text-center">
            <p className="p-4 text-gray-500">
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
