import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getSEOForPath, DEFAULT_SEO } from '../utils/seoConfig';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const isStandalone = [
    '/details',
    '/floorplan',
    '/floorplan-screen',
    '/agenda-screen',
    '/partners-screen',
  ].includes(path);

  // Global interceptor for all internal anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // If already handled (e.g. by React Router <Link>), let it proceed natively
      if (e.defaultPrevented) return;

      const a = e.target.closest('a');
      if (!a) return;

      // If it's a React Router Link, do not intercept
      if (a.hasAttribute('data-discover')) return;

      const href = a.getAttribute('href');
      if (!href) return;

      // Ignore hash-only, mailto, tel, javascript, external links, and files
      if (
        href === '#' ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        /\.(pdf|zip|png|jpg|jpeg|svg|webp)$/i.test(href)
      ) {
        if (href === '#' || href === '') {
          e.preventDefault();
        }
        return;
      }

      // If it starts with / or is a hash link
      if (href.startsWith('/#') || (href.startsWith('#') && href.length > 1)) {
        e.preventDefault();
        const hash = href.startsWith('/#') ? href.substring(2) : href.substring(1);
        if (!hash) return;
        const currentNormalized = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
        if (currentNormalized === '/') {
          const target = document.getElementById(hash) || (hash === 'faq' ? document.getElementById('hodl-faq-section') : null);
          if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
            try {
              window.history.pushState(null, '', `/#${hash}`);
            } catch (_) {}
          }
        } else {
          navigate(`/#${hash}`);
        }
        return;
      }

      if (href.startsWith('/')) {
        e.preventDefault();
        // Strip subdirectory prefix if already present (both with and without .com)
        let cleanRoute = href.replace(/^\/bengaluruskillsummit(?:\.com)?/i, '');
        if (!cleanRoute.startsWith('/')) cleanRoute = '/' + cleanRoute;
        const currentNormalized = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
        const targetNormalized = cleanRoute.toLowerCase().replace(/\/+$/, '') || '/';
        if (currentNormalized !== targetNormalized) {
          navigate(cleanRoute);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navigate, location.pathname, location.hash]);

  // Scroll to hash or top when actual route changes
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(hashId) || (hashId === 'faq' ? document.getElementById('hodl-faq-section') : null);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Dynamic SEO Metadata Management (Updates title, description, OG, Twitter, canonical)
  useEffect(() => {
    const seo = getSEOForPath(location.pathname);

    // 1. Update Document Title
    document.title = seo.title || DEFAULT_SEO.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Set standard meta description
    setMetaTag('name', 'description', seo.description || DEFAULT_SEO.description);

    // 4. Set Open Graph tags
    setMetaTag('property', 'og:title', seo.title || DEFAULT_SEO.title);
    setMetaTag('property', 'og:description', seo.description || DEFAULT_SEO.description);
    setMetaTag('property', 'og:url', seo.canonical || DEFAULT_SEO.canonical);
    setMetaTag('property', 'og:type', seo.ogType || DEFAULT_SEO.ogType);

    // 5. Set Twitter tags
    setMetaTag('name', 'twitter:title', seo.title || DEFAULT_SEO.title);
    setMetaTag('name', 'twitter:description', seo.description || DEFAULT_SEO.description);

    // 6. Update Canonical Link
    const targetCanonical = seo.canonical || DEFAULT_SEO.canonical;
    if (targetCanonical) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', targetCanonical);
    }
  }, [location.pathname]);

  // Hydrate lazy images and background images on route change or dynamic DOM update
  useEffect(() => {
    const hydrateImages = () => {
      // 1. Convert any data-nectar-img-src to real src if still blank SVG or empty
      const lazyImgs = document.querySelectorAll('img[data-nectar-img-src]');
      lazyImgs.forEach((img) => {
        const realSrc = img.getAttribute('data-nectar-img-src');
        if (realSrc && (!img.src || img.src.includes('data:image/svg+xml') || !img.src.includes(realSrc))) {
          img.src = realSrc;
        }
      });

      // 2. Hydrate elements with data-nectar-img-src on divs/elements as background-image
      const lazyBgs = document.querySelectorAll('[data-nectar-img-src]:not(img)');
      lazyBgs.forEach((el) => {
        const bg = el.getAttribute('data-nectar-img-src');
        if (bg && (!el.style.backgroundImage || !el.style.backgroundImage.includes(bg))) {
          el.style.backgroundImage = 'url("' + bg + '")';
        }
      });

      // 3. Trigger Salient / standard scroll/resize events so any Salient listeners recalculate
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    };

    // Run immediately and after small delays for any nested component mount
    hydrateImages();
    const t1 = setTimeout(hydrateImages, 50);
    const t2 = setTimeout(hydrateImages, 200);
    const t3 = setTimeout(hydrateImages, 600);

    // Also observe DOM additions in the current page
    const observer = new MutationObserver(() => {
      hydrateImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, [location.pathname]);

  if (isStandalone) {
    return <Outlet />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
