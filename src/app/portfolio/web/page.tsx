import { type NextPage } from 'next';
import Image from 'next/image';
import coding from '@/public/images/coding.jpg';

const WebPortfolio: NextPage = () => {
  return (
    <div>
      <header className="relative">
        <Image
          src={coding}
          className="max-h-80 w-full object-cover opacity-70 blur"
          alt="A Nord stage piano"
        />
        <h1 className="absolute top-1/2 my-4 w-full text-center text-4xl sm:text-7xl">
          Software Engineering
        </h1>
      </header>
      <main className="mx-auto max-w-prose px-4 py-16">
        <section className="mb-16">
          <h2 className="mb-8 text-2xl sm:text-4xl">Introduction</h2>
          <p className="mb-4">
            For the last 5 years, I&apos;ve been working as a software engineer for
            clearer.io, a platform for E-Commerce growth solutions. I&apos;ve worked
            on a variety of projects across our stack, using MySQL, Laravel,
            and React. My goal is always to build robust solutions with
            modern and pragmatic user interfaces. In recent years, as generative AI
            has become more prevalent in the industry, I have increased my ability
            to rapidly deliver robust solutions through multi-agent workflows.
          </p>
        </section>
        {/* <h2 className="my-8 text-2xl sm:text-4xl">Projects</h2>
        <section className="mb-16">
          <div className="rounded-md border border-slate-600 p-8 text-center text-slate-400">
            <p>Projects portfolio incoming...</p>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default WebPortfolio;
