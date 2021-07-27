// @ts-nocheck
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { Navbar, Footer } from '@components/common';

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BradLayout({
  frontMatter: {
    title,
    description,
    category,
    date,
    cover_image,
    author,
    author_image,
    by,
    publishedAt,
    readingTime,
    slug,
    canonical,
  },
  children,
}) {
  return (
    <>
      <div className="antialiased w-full">
        <Navbar />
        <main className="fit container mx-auto py-16 px-8">
          <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {title}
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
              <div className="flex items-center">
                <Image
                  alt={author}
                  height={24}
                  width={24}
                  src={author_image}
                  className="rounded-full"
                />
                <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                  {by}
                  {author} {` / `}
                  {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                </p>
              </div>
              <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
                {readingTime.text}
                {` • `}
              </p>
            </div>
            <div className="prose dark:prose-dark max-w-none w-full">
              {children}
            </div>

            <div className="text-sm text-gray-700 dark:text-gray-300">
              <a
                href={discussUrl(slug)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>
              {` • `}
              <a href={editUrl(slug)} target="_blank" rel="noopener noreferrer">
                Edit on GitHub
              </a>
            </div>
          </article>
        </main>
        <Footer />
      </div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'article',
          title,
          url: canonical,
          description,
          article: {
            publishedTime: new Date(publishedAt).toISOString(),
            authors: [author],
          },
          images: [
            {
              url: cover_image,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
    </>
  );
}
