import z from 'zod';

export const SearchFormSchema = z.object({
  query: z.string().min(1, 'Provide a query'),
});
