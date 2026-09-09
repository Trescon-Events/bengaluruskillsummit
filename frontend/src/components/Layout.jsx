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
      const a = e.target.closest('a');
      if (!a) return;
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
        // Strip subdirectory prefix if already present
        let cleanRoute = href.replace(/^\/bengaluruskillsummit\.com/, '');
        if (!cleanRoute.startsWith('/')) cleanRoute = '/' + cleanRoute;
        navigate(cleanRoute);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [navigate]);

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
