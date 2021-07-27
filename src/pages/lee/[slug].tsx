/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
import { MDXRemote } from 'next-mdx-remote';

import { MDXComponents } from '@components/common';
import BradLayout from '@layouts/BradLayout';
import { getFiles, getFileBySlug } from '@lib/mdx';

export default function Blog({ frontMatter, mdxSource }) {
  return (
    <BradLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </BradLayout>
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
