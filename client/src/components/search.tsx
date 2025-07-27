import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { MapPin, Search as SearchIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator.tsx';

export function Search() {
  return (
    <div
      className={
        'flex h-12 w-full items-center gap-2 rounded bg-background p-2 shadow-lg'
      }
    >
      <div className={'flex w-full items-center gap-1'}>
        <SearchIcon size={24} className={'text-foreground'} />
        <Input
          placeholder={'Search by artist or genre'}
          className={
            'border-0 px-0 text-foreground shadow-none focus-visible:ring-0'
          }
        />
      </div>
      <Separator orientation="vertical" />
      <div className={'flex w-64 items-center gap-1'}>
        <MapPin size={24} className={'text-foreground'} />
        <Input
          placeholder={'Location'}
          className={
            'max-w-64 border-0 px-0 text-foreground shadow-none focus-visible:ring-0'
          }
        />
      </div>
      <Button>Search</Button>
    </div>
  );
}
