import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // Path to import your global MDX components (components/mdx.tsx).
    providerImportSource: '@/components/mdx',
  },
});
