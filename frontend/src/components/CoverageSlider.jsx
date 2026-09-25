import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function CoverageSlider({ items = [], speed = 0.75, reverse = false }) {
  const containerRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const scrollPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const dragDistRef = useRef(0);

  const [selectedImg, setSelectedImg] = useState(null);

  // Duplicate items 3x if array is short (< 8 items) to ensure completely smooth infinite loop
  const displayItems = items.length < 8 
    ? [...items, ...items, ...items, ...items] 
    : [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      isDraggingRef.current = false;
    };

    // Touch handlers
    const handleTouchStart = () => {
      isInteractingRef.current = true;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
    const handleTouchEnd = () => {
      resumeTimerRef.current = setTimeout(() => {
        if (container) scrollPosRef.current = container.scrollLeft;
        isInteractingRef.current = false;
      }, 1500);
    };

    // Mouse drag handlers for desktop dragging
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      isInteractingRef.current = true;
      startXRef.current = e.pageX - container.offsetLeft;
      startScrollLeftRef.current = container.scrollLeft;
      dragDistRef.current = 0;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      dragDistRef.current = Math.abs(walk);
      container.scrollLeft = startScrollLeftRef.current - walk;
      scrollPosRef.current = container.scrollLeft;
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        resumeTimerRef.current = setTimeout(() => {
          if (container) scrollPosRef.current = container.scrollLeft;
          isInteractingRef.current = false;
        }, 1500);
      }
    };

    const handleScroll = () => {
      if (isInteractingRef.current || isHoveredRef.current) {
        scrollPosRef.current = container.scrollLeft;
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('scroll', handleScroll, { passive: true });

    // Initial position
    scrollPosRef.current = container.scrollLeft;

    const animate = () => {
      if (!isHoveredRef.current && !isInteractingRef.current && container) {
        const delta = reverse ? -speed : speed;
        scrollPosRef.current += delta;
        const loopThreshold = container.scrollWidth / (items.length < 8 ? 4 : 2);

        if (loopThreshold > 0) {
          if (!reverse && scrollPosRef.current >= loopThreshold) {
            scrollPosRef.current -= loopThreshold;
          } else if (reverse && scrollPosRef.current <= 0) {
            scrollPosRef.current += loopThreshold;
          }
        }
        container.scrollLeft = scrollPosRef.current;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [speed, reverse, items.length]);

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    const step = 380;
    const loopThreshold = container.scrollWidth / (items.length < 8 ? 4 : 2);
    if (container.scrollLeft <= step && loopThreshold > 0) {
      container.scrollLeft += loopThreshold;
    }
    container.scrollBy({ left: -step, behavior: 'smooth' });

    resumeTimerRef.current = setTimeout(() => {
      if (container) scrollPosRef.current = container.scrollLeft;
      isInteractingRef.current = false;
    }, 600);
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    const step = 380;
    const loopThreshold = container.scrollWidth / (items.length < 8 ? 4 : 2);
    if (loopThreshold > 0 && container.scrollLeft >= loopThreshold - step) {
      container.scrollLeft -= loopThreshold;
    }
    container.scrollBy({ left: step, behavior: 'smooth' });

    resumeTimerRef.current = setTimeout(() => {
      if (container) scrollPosRef.current = container.scrollLeft;
      isInteractingRef.current = false;
    }, 600);
  };

  const handleCardClick = (src) => {
    if (dragDistRef.current > 5) return; // Ignore click if user was dragging
    setSelectedImg(src);
  };

  return (
    <>
      <div className="coverage-slider-wrapper">
        <button 
          type="button" 
          className="coverage-nav-btn coverage-prev-btn" 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>

        <div className="coverage-slider-container" ref={containerRef}>
          <div className="coverage-slider-track">
            {displayItems.map((item, idx) => (
              <div 
                className="coverage-card" 
                key={idx}
                onClick={() => handleCardClick(item.src)}
                title="Click to zoom in"
              >
                <img 
                  src={item.src} 
                  alt={item.alt || `coverage-${idx + 1}`} 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          type="button" 
          className="coverage-nav-btn coverage-next-btn" 
          onClick={handleNext}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImg && (
        <div 
          className="coverage-lightbox-backdrop" 
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="coverage-lightbox-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="coverage-lightbox-close" 
              onClick={() => setSelectedImg(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img 
              src={selectedImg} 
              alt="Media Coverage Fullscreen" 
              className="coverage-lightbox-img" 
            />
          </div>
        </div>
      )}
    </>
  );
}
