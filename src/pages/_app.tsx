/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';

import { MDXComponents, Head } from '@components/common';
import '../styles/main.css';
import '../styles/chrome-bug.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <Head />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
