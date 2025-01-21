import { type NextPage } from 'next';
import Image from 'next/image';
import coding from '@/public/images/coding.jpg';

const WebPortfolio: NextPage = () => {
  return (
    <div>
      <header className="relative">
        <Image
          src={coding}
          className="max-h-80 object-cover opacity-70 blur w-full"
          alt="A Nord stage piano"
        />
        <h1 className="absolute top-1/2 my-4 w-full text-center text-4xl sm:text-7xl">
          Web Portfolio
        </h1>
      </header>
      <main className="mx-auto max-w-prose px-4 py-16">
        <section className="mb-16">
          <h2 className="mb-8 text-2xl sm:text-4xl">Introduction</h2>
          <p className="mb-4">
            For the last 3 years, I've worked as a software engineer for
            clearer.io, a platform for E-Commerce growth solutions. I've worked
            on a variety of projects across our stack, which is MySQL, Laravel,
            and JavaScript. My work here also includes a lot of work with
            Angular, Typescript-React, and Vue.
          </p>
          <p className="mb-4">
            My goal is always to provide creative and innovative solutions to build seamless and consistent user interfaces. I'm always looking to learn and grow as a developer.
          </p>
        </section>
        <h2 className="my-8 text-2xl sm:text-4xl">Projects</h2>
        <section className="mb-16">
          <div className="rounded-md border border-slate-600 text-slate-400 p-8 text-center">
            <p>Projects portfolio incoming...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebPortfolio;
