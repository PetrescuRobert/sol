import { Hero } from '@/components/hero';
import { createFileRoute, Link } from '@tanstack/react-router';
import { CardWithImageAndTitle } from '@/components/CardWithImageAndTitle.tsx';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const links = [
    {
      genre: 'rock',
      label: 'Rock',
    },
    {
      genre: 'jazz',
      label: 'Jazz',
    },
    {
      genre: 'manele',
      label: 'Manele',
    },
    {
      genre: 'populara',
      label: 'Populara',
    },
  ];
  return (
    <>
      <Hero />
      <section className={'container mx-auto mb-8 pt-8'}>
        <div className={'grid grid-cols-3 place-items-center gap-4'}>
          {links.map((link, index) => (
            <Link to={'/artists'} search={{ genre: link.genre }} key={index}>
              <CardWithImageAndTitle
                imageSrc={'/singer.png'}
                title={link.label}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
