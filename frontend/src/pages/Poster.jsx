import React, { useEffect, useRef } from 'react';

export default function Poster() {
  const iframeRef = useRef(null);

  useEffect(() => {
    document.title = 'Poster - Bengaluru Skill Summit';
    window.scrollTo(0, 0);

    const scriptId = 'iframe-resizer-script';
    let script = document.getElementById(scriptId);

    const initResize = () => {
      if (window.iFrameResize && document.getElementById('posterFrame')) {
        try {
          window.iFrameResize({
            log: false,
            autoResize: true,
            checkOrigin: false,
            heightCalculationMethod: 'max',
          }, '#posterFrame');
        } catch (e) {
          console.warn('iFrameResize error:', e);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js';
      script.async = true;
      script.onload = initResize;
      document.body.appendChild(script);
    } else {
      initResize();
    }

    return () => {
      const frame = document.getElementById('posterFrame');
      if (frame && frame.iFrameResizer) {
        try {
          frame.iFrameResizer.close();
        } catch (e) {
          // Ignore
        }
      }
    };
  }, []);

  return (
    <div className="bss-poster-page">
      <div className="bss-poster-container">
        <iframe
          ref={iframeRef}
          id="posterFrame"
          src="https://poster.bengaluruskillsummit.com/"
          style={{ width: '100%', border: 'none', minHeight: '850px', display: 'block' }}
          allow="camera; microphone; autoplay; fullscreen"
          scrolling="no"
          title="Bengaluru Skill Summit Poster"
        />
      </div>

      <style>{`
        .bss-poster-page {
          width: 100%;
          min-height: 85vh;
          background-color: #ffffff;
          padding: 0;
          margin: 0;
        }
        .bss-poster-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
