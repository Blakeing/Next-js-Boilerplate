/* eslint-disable react/jsx-props-no-spreading */
import { MDXRemote } from 'next-mdx-remote';

import { MDXComponents } from '@components/common';
import BlogLayout from '@layouts/blog';
import { getFiles, getFileBySlug } from '@lib/mdx';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('lee');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('lee', params.slug);

  return { props: { ...post } };
}
