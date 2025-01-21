import { type NextPage } from 'next';
import PortfoliosList from '@/components/PortfoliosList';

const Home: NextPage = () => {
  return (
    <main>
      <section className="flex h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl sm:text-7xl">BEN BROMLEY</h1>
        <h2 className="text-md text-center sm:text-xl">
          Software Engineer • Musician • Audio Technician
        </h2>
      </section>
      <section className="mb-24 flex justify-center px-4 text-center">
        <div>
          <h2 className="mb-12 text-4xl">Portfolios</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <PortfoliosList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
