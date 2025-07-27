import { z } from 'zod';

export const artistsSearchParamsValidationSchema = z.object({
  genre: z.string(),
});
