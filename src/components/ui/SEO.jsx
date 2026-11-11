import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://uniquedigitaltech.com';
const DEFAULT_TITLE = 'Unique Digital Tech | Enterprise Software & Cloud Engineering Agency';
const DEFAULT_DESC =
  'Unique Digital Tech architects and builds high-concurrency web platforms, mobile applications, custom ERPs, and cloud architecture with 100% IP ownership.';
const DEFAULT_IMAGE = `${SITE_URL}/logo-exact.png`;

function setMetaTag(name, content, isProperty = false) {
  if (!content) return;
  const attribute = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  schema,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Title
    const finalTitle = title ? `${title} | Unique Digital Tech` : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Meta Description & Keywords
    const finalDesc = description || DEFAULT_DESC;
    setMetaTag('description', finalDesc);
    setMetaTag('title', finalTitle);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // 3. Canonical URL
    const finalCanonical = canonical || `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    setCanonical(finalCanonical);

    // 4. Open Graph Tags
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDesc, true);
    setMetaTag('og:url', finalCanonical, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Unique Digital Tech', true);

    // 5. Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDesc);
    setMetaTag('twitter:image', ogImage);

    // 6. JSON-LD Structured Data Injection
    const scriptId = 'page-seo-schema';
    let scriptEl = document.getElementById(scriptId);

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema, pathname]);

  return null;
}

