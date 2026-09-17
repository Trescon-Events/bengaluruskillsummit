import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
        return;
      }

      // If it starts with /
      if (href.startsWith('/')) {
        // Handle hash navigation on the same page like /#faq
        if (href.startsWith('/#')) {
          const hash = href.substring(2);
          const target = document.getElementById(hash);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }

        e.preventDefault();
        // Strip subdirectory prefix if already present (both with and without .com)
        let cleanRoute = href.replace(/^\/bengaluruskillsummit(?:\.com)?/i, '');
        if (!cleanRoute.startsWith('/')) cleanRoute = '/' + cleanRoute;
        navigate(cleanRoute);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navigate]);

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
