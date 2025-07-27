// Create a new router instance
import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen.ts';
import { getReactQueryContext } from '@/config/reactQuery.ts';

export const router = createRouter({
  routeTree,
  context: {
    ...getReactQueryContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
