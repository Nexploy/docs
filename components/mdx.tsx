import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}

// Consumed by MDX files through `providerImportSource` (see source.config.ts).
export const useMDXComponents = getMDXComponents;
