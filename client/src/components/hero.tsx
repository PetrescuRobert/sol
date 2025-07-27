import { Search } from '@/components/search.tsx';

export function Hero() {
  return (
    <section className={'mb-16 bg-accent text-muted-foreground'}>
      <div className={'container mx-auto py-4 text-primary-foreground'}>
        <Search />
        <div className={'mt-4 flex h-80 gap-4'}>
          <div
            className={
              'flex basis-1/3 flex-col justify-center gap-2 text-foreground'
            }
          >
            <h1 className={'text-4xl font-semibold'}>
              Book your favorite artist for an unforgettable night!
            </h1>
            <p className={'text-sm text-muted-foreground'}>
              All your beloved artists in one place!
            </p>
          </div>
          <div className={'basis-2/3'}>
            <img src={'/ticket.png'} className={'h-96 w-full'} />
          </div>
        </div>
      </div>
    </section>
  );
}
