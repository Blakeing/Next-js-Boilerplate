/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
import Image from 'next/image';
import Link from 'next/link';

const CustomLink = (props) => {
  // eslint-disable-next-line prefer-destructuring
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
