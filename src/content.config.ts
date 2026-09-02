import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/**
 * The Services section is data-driven so it can be edited without touching
 * markup. Each entry carries a `lang`; filter with
 * `getCollection('services', ({ data }) => data.lang === lang)`.
 * Other section copy lives in `src/i18n/ui.ts`.
 */

const services = defineCollection({
  loader: file('src/content/services.yaml'),
  schema: z.object({
    id: z.string(),
    lang: z.enum(['en', 'es']),
    category: z.enum(['residential', 'commercial']),
    order: z.number().default(0),
    icon: z.string().describe('Emoji shown in the card icon tile'),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { services };
