import ArrowLeft from '@/components/icons/ArrowLeft';
import Link from 'next/link';

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <div>
      <nav className="absolute left-0 top-0 z-10 p-4">
        <Link
          href="/"
          className="text-slate-100 opacity-50 transition-opacity duration-300 hover:opacity-100 flex"
        >
          <ArrowLeft className="mr-2"/> Back
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
