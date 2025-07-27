import { createFileRoute } from '@tanstack/react-router';
import { artistsSearchParamsValidationSchema } from '@/lib/types/validation';

export const Route = createFileRoute('/artists')({
  validateSearch: artistsSearchParamsValidationSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const searchParams = Route.useSearch();
  return <div>Hello "/artists"! With: {searchParams.genre}</div>;
}
