import { type NextPage } from 'next';
import Image from 'next/image';
import piano from '@/public/images/piano.jpg';

const MusicPortfolio: NextPage = () => {
  return (
    <div>
      <header className="relative">
        <Image
          src={piano}
          className="max-h-80 object-cover opacity-70 blur w-full"
          alt="A Nord stage piano"
        />
        <h1 className="absolute top-1/2 my-4 w-full text-center text-4xl sm:text-7xl">
          Music Portfolio
        </h1>
      </header>
      <main className="mx-auto max-w-prose px-4 py-16">
        <section className="mb-16">
          <h2 className="mb-8 text-2xl sm:text-4xl">Piano</h2>
          <p className="mb-4">
            I&apos;m a self taught pianist with 10+ years of performance experience
            across religious, orchestral, and education settings. I began as a
            church pianist and organist. I now play in musical theatre pit
            bands.
          </p>
          <p className="mb-4">
            I am experienced in programming and operating mainstage. I can also
            design custom patches from scratch using the ES-series synthesiser
            plugins.
          </p>
        </section>
        <h2 className="my-8 text-2xl sm:text-4xl">Experience</h2>
        <section className="mb-16">
          <table className="w-full border-separate">
            <thead>
              <tr className="text-left">
                <th>Part</th>
                <th>Show</th>
                <th className='hidden md:table-cell'>Location</th>
                <th className='hidden sm:table-cell'>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* <ExperienceTableRow
                part="Keyboard"
                show="Evita"
                location="Loughborough, England"
                date="Sep 2025"
              /> */}
              <ExperienceTableRow
                part="Keyboard 2"
                show="We Will Rock You"
                location="Leicester, England"
                date="Mar 2025"
              />
              <ExperienceTableRow
                part="Keyboard 2"
                show="Joseph"
                location="Leicester, England"
                date="Mar 2024"
              />
              <ExperienceTableRow
                part="Keyboard 1"
                show="Sister Act"
                location="Leicester, England"
                date="Mar 2020"
              />
              <ExperienceTableRow
                part="Rhythm Guitar"
                show="FAME!"
                location="Leicester, England"
                date="Feb 2018"
              />
            </tbody>
          </table>
        </section>
        <section>
          <h2 className="mb-8 text-2xl sm:text-4xl">How I Got Here</h2>
          <p className="mb-4">
            Over the last decade I&apos;ve also undertaken studies in Double Bass
            (grade 4), tenor trombone (grade 8), and choral singing. When not
            playing in pit bands, I also perform on-stage in amateur musical
            theatre.
          </p>
          <p className="mb-4">
            The above instrument studies were funded by Awards for Young
            Musicians (now Young Sounds UK), a charity supporting young people
            from lower income backgrounds. Because of this organisation, I had
            the opportunity to play tenor trombone for the National Orchestra
            For All (NOFA), as well as being accepted into the National Youth
            Orchestra (NYO), and nominated for the Royal Birmingham
            Conservetoire&apos;s &quot;LEAP&quot; youth ensemble.
          </p>
          <p>
            If anyone in a lower income situation is trying to support a young
            musician in their care, I would highly recommend getting in touch
            with Young Sounds to discuss what options are available. I was
            nominated for an award by my high school music teacher, who was
            incredibly supportive of my musical growth. To this day, I am very
            grateful for the opportunities they provided me with.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MusicPortfolio;

type ExperienceTableRowProps = {
  part: string;
  show: string;
  location: string;
  date: string;
};

const ExperienceTableRow: React.FC<ExperienceTableRowProps> = ({
  part,
  show,
  location,
  date,
}) => {
  return (
    <tr>
      <td>{part}</td>
      <td>{show}</td>
      <td className="hidden md:table-cell">{location}</td>
      <td className="hidden sm:table-cell">{date}</td>
    </tr>
  );
};
