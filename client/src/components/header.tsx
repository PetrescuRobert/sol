import { Music, UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header
      className={'flex max-h-16 justify-center border-b py-4 drop-shadow-xl'}
    >
      <nav className={'container flex items-center justify-between'}>
        <div className={'flex items-center gap-2'}>
          <Music size={48} />
          <span className={'text-xl font-bold'}>SOL</span>
        </div>
        <div className={'flex items-center gap-2'}>
          <UserCircle />
          <span>Popescu Ion</span>
        </div>
      </nav>
    </header>
  );
}
