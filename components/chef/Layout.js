import Head from 'next/head';
import ChefHeader from './Header';
import ChefFooter from './Footer';

export default function ChefLayout({ title, description, canonical, ogTitle, ogDescription, ogType, children, jsonLd }) {
  const base = 'https://duanemcdonald.com';
  const fullUrl = `${base}${canonical}`;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={fullUrl} />
        <link rel="stylesheet" href="/chef/assets/css/styles.css" />
        <meta property="og:type" content={ogType || 'website'} />
        <meta property="og:site_name" content="Chef Duane" />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:url" content={fullUrl} />
        <meta name="twitter:card" content="summary" />
        {jsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        )}
      </Head>
      <a className="skip-link" href="#main">Skip to content</a>
      <ChefHeader current={canonical} />
      <main id="main">{children}</main>
      <ChefFooter />
      <script src="/chef/assets/js/site.js" defer />
    </>
  );
}