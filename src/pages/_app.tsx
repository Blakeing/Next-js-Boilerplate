/* eslint-disable react/jsx-props-no-spreading */

import { useEffect } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import '../styles/chrome-bug.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
