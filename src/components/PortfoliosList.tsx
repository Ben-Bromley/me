import { type StaticImageData } from 'next/image';
import PortfolioCard from './PortfolioCard';
import coding from '@/public/images/coding.jpg';
import piano from '@/public/images/piano.jpg';
import mixing from '@/public/images/mixing.jpg';

type PortfolioLink = {
  url: string;
  image: StaticImageData;
  title: string;
  alt: string;
};

const PortfoliosList: React.FC = () => {
  const portfolios: PortfolioLink[] = [
    {
      url: '/portfolio/web',
      image: coding,
      title: 'Web',
      alt: 'HTML code on a laptop screen',
    },
    {
      url: '/portfolio/music',
      image: piano,
      title: 'Music',
      alt: 'A Nord stage piano',
    },
    {
      url: '/portfolio/audio',
      image: mixing,
      title: 'Audio',
      alt: 'A glowing mixing desk',
    },
  ];

  return portfolios.map(({ url, image, title, alt }) => (
    <PortfolioCard url={url} image={image} title={title} alt={alt} />
  ));
};

export default PortfoliosList;
