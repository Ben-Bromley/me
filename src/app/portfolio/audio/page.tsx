import { type NextPage } from 'next';
import Image from 'next/image';
import mixing from '@/public/images/mixing.jpg';

const AudioPortfolio: NextPage = () => {
  return (
    <div>
      <header className="relative">
        <Image
          src={mixing}
          className="max-h-80 w-full object-cover opacity-70 blur"
          alt="A glowing mixing desk"
        />
        <h1 className="absolute top-1/2 my-4 w-full text-center text-4xl sm:text-7xl">
          Technical Portfolio
        </h1>
      </header>
      <main className="px-4 py-16">
        <section className="mx-auto mb-16 max-w-prose">
          <h2 className="mb-8 text-2xl sm:text-4xl">Introduction</h2>
          <p className="mb-4">
            I&apos;m a Music & Music Technology student at the University Of
            Nottingham. I work in Logic Pro to record, create, and mix music. I
            have also worked with Cubase for music recording and production. I
            also work with EOS Family software for lighting design, and QLab for
            sound design.
          </p>
          <p className="mb-4">
            I&apos;m currently volunteering as the Company Technical Director at the
            Nottingham New Theatre where I am responsible for the technical
            training of our lighting and sound designers in QLab, EOS, and
            rigging of smart lighting fixtures. I also run live sound for our
            social events such as our &quot;Green Room&quot; & &quot;Drag Night&quot; performance
            fundraisers, and our Oscars-inspired awards evening.
          </p>
        </section>
        <section className="mx-auto mb-16 max-w-prose">
          <h2 className="my-8 text-2xl sm:text-4xl">Experience</h2>
          <div id="experience-table-container" className="relative">
            <div className="overflow-x-scroll">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="pb-4">Role</th>
                    <th>Show</th>
                    <th className="hidden md:table-cell">Location</th>
                    <th className="hidden sm:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <ExperienceTableRow
                    part="Technical Assistant"
                    show="Misc. Live Events"
                    location="TEC PA & Lighting"
                    date="2024 - Present"
                  /> */}
                  <ExperienceTableRow
                    part="Company Technical Director"
                    show="All Plays and Events"
                    location="Nottingham New Theatre"
                    date="2024 - Present"
                  />
                  <ExperienceTableRow
                    part="Technical Director"
                    show="Immanuel Kant (Play)"
                    location="Edinburgh"
                    date="August 2024"
                  />
                  <ExperienceTableRow
                    part="Lighting Designer"
                    show="About My Depression (Play)"
                    location="Nottingham"
                    date="November 2023"
                  />
                  <ExperienceTableRow
                    part="Lighting Designer"
                    show="Jack And The Beanstalk (Pantomime)"
                    location="Leicester"
                    date="December 2018"
                  />
                  <ExperienceTableRow
                    part="Student Venue Technician"
                    show="All Showcases"
                    location="Leicester"
                    date="2017 - 19"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-prose">
          <h2 className="mb-8 text-2xl sm:text-4xl">Aspirations</h2>
          <p className="mb-4">
            I am looking to expand my portfolio of work in sound design, audio
            engineering, and lighting design.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AudioPortfolio;

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
    <tr className="border-b border-gray-700">
      <td className="max-w-60 py-2 pr-8">{part}</td>
      <td className="max-w-60 py-2 pr-8">{show}</td>
      <td className="hidden max-w-60 py-2 pr-8 md:table-cell">{location}</td>
      <td className="hidden max-w-60 py-2 pr-8 sm:table-cell">{date}</td>
    </tr>
  );
};
