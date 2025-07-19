import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Header } from '@/components/header.tsx';
import { PageContainer } from '@/components/page-container.tsx';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <TanStackRouterDevtools />

      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  ),
});
