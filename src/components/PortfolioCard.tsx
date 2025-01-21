import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

type PortfolioCardProps = {
  url: string;
  image: StaticImageData;
  alt: string;
  title: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  url,
  image,
  alt,
  title,
}) => {
  return (
    <Link href={url} className="max-w-96 flex-grow">
      <div className="portfolio-card relative overflow-hidden rounded border border-slate-700 transition-all duration-500 hover:border-slate-400">
        <Image
          src={image}
          className="rounded transition-all duration-500 hover:scale-110 hover:opacity-40 hover:blur-sm"
          alt={alt}
        />
        <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 text-2xl font-medium opacity-0 transition-opacity duration-500">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCard;