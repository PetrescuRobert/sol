import { Card, CardContent } from '@/components/ui/card.tsx';

type CardWithImageAndTitleProps = {
  imageSrc: string;
  title: string;
};

export function CardWithImageAndTitle({
  imageSrc,
  title,
}: CardWithImageAndTitleProps) {
  return (
    <Card className={'max-w-64 p-0 hover:cursor-pointer'}>
      <CardContent className={'relative p-0'}>
        <img src={imageSrc} className={'max-h-56 w-full'} />
        <div
          className={
            'absolute bottom-0 flex h-14 w-full items-center bg-accent p-4 text-accent-foreground hover:h-16'
          }
        >
          <h2 className={'text-2xl font-semibold'}>{title}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
