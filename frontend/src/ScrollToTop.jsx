import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Check both window and the root element in case of custom scroll containers
            const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollPos > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        // Some themes scroll a specific wrapper. Listen to document scroll too.
        document.addEventListener('scroll', toggleVisibility, { capture: true, passive: true });
        
        // Initial check
        toggleVisibility();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            document.removeEventListener('scroll', toggleVisibility, { capture: true });
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Fallback for custom scroll containers
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div 
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '45px',
                height: '45px',
                backgroundColor: '#0d53c7',
                color: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 999999,
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </div>
    );
};

export default ScrollToTop;
