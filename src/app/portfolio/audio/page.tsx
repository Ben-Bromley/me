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
          <h2 className="mb-4 mt-8 text-2xl sm:text-4xl">Education</h2>
          <p className="mb-4">
            <strong>I&apos;m an MSc Audio Engineering student at the University of Derby</strong>,
            currently studying power amplifier design, digital signal processing,
            and audio research skills.
          </p>
          <p className="mb-4">
            <strong>I recently graduated 1st class in BA (Hons) Music & Music Technology
            at the University Of Nottingham. I received a first class (82%) for my final year
            project</strong>, which investigated machine learning enabled systems for real-time sound
            design in improvised theatre.
          </p>
          <h2 className="mb-4 mt-8 text-2xl sm:text-4xl">Tech at the Nottingham New Theatre</h2>
          <p className="mb-4">
            I recently finished 2 years managing the technical department of the
            Nottingham New Theatre, having been awarded a lifelong fellowship for my work.

            Here I led technical training of commmittee and membership, including rigging,
            EOS family for lighting, and QLab for sound design. My roles also involved designing rig
            plans for dozens of plays based on a limited supply of shared technical stock, regularly
            dealing with technical troublshooting and logistics, and frequently managing a team of
            technicians with varied ability, building rigs under tight timing constraints. I also ran
            live sound for our social events such as our &quot;Green Room&quot; & &quot;Drag Night&quot;
            performance fundraisers, and our Oscars-inspired awards evening. I concluded my stint on the
            committee as the technical director and A1 sound technician for the theatre&apos;s 100 centenary
            alumni event.
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
                  <ExperienceTableRow
                    part="LX & Sound Technician"
                    show="Legion Dance Showcase"
                    location="University of Exeter"
                    date="November 2026"
                  />
                  <ExperienceTableRow
                    part="Technical Director"
                    show="100 Years Of Student Theatre (Alumni Event)"
                    location="Nottingham New Theatre"
                    date="Summer 2026"
                  />
                  <ExperienceTableRow
                    part="Technical Manager"
                    show="All Plays and Events"
                    location="Nottingham New Theatre"
                    date="2025 - 2026"
                  />
                  <ExperienceTableRow
                    part="LX & Sound Technician"
                    show="Legion Dance Showcase"
                    location="University of Exeter"
                    date="November 2025"
                  />
                  <ExperienceTableRow
                    part="Technician & Technical Manager"
                    show="All Fringe Shows"
                    location="Edinburgh Fringe Festival"
                    date="August, 2025 & 2026"
                  />
                  <ExperienceTableRow
                    part="Sound Designer"
                    show="The Sinking Place (Play)"
                    location="Nottingham New Theatre"
                    date="March 2025"
                  />
                  <ExperienceTableRow
                    part="Company Technical Director"
                    show="All Plays and Events"
                    location="Nottingham New Theatre"
                    date="2024 - 2025"
                  />
                  <ExperienceTableRow
                    part="Technical Director"
                    show="Immanuel Kant (Play)"
                    location="Edinburgh Fringe Festival"
                    date="August 2024"
                  />
                  <ExperienceTableRow
                    part="LX Designer"
                    show="About My Depression (Play)"
                    location="Nottingham"
                    date="November 2023"
                  />
                  <ExperienceTableRow
                    part="LX Designer"
                    show="Jack And The Beanstalk (Pantomime)"
                    location="Leicester"
                    date="December 2018"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-prose">
          <h2 className="mb-4 mt-8 text-2xl sm:text-4xl">Current Work</h2>
          <p className="mb-4">
            I continue to offer occasional freelance services as an EOS and QLab programmer
            in the East Midlands area
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
