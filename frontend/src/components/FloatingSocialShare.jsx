import React, { useState } from 'react';

export default function FloatingSocialShare() {
  const [copied, setCopied] = useState(false);

  const getCurrentUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : 'https://bengaluruskillsummit.com/';
  };

  const handleFacebookShare = (e) => {
    e.preventDefault();
    const url = getCurrentUrl();
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
  };

  const handleLinkedInShare = (e) => {
    e.preventDefault();
    const url = getCurrentUrl();
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
  };

  const handleCopyLink = (e) => {
    e.preventDefault();
    const url = getCurrentUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        showCopiedToast();
      }).catch(() => {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopiedToast();
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const showCopiedToast = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  return (
    <div
      className="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style bss-floating-share"
      style={{
        position: 'fixed',
        right: '0px',
        top: '350px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        lineHeight: '32px',
        backgroundColor: 'transparent',
      }}
      aria-label="Social Share"
    >
      {/* Facebook */}
      <a
        className="a2a_button_facebook"
        href="#facebook"
        onClick={handleFacebookShare}
        title="Share on Facebook"
        aria-label="Share on Facebook"
        style={{
          display: 'block',
          width: '32px',
          height: '32px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.15s ease, opacity 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <span
          className="a2a_svg a2a_s__default a2a_s_facebook"
          style={{
            display: 'inline-block',
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            backgroundColor: 'rgb(8, 102, 255)',
            overflow: 'hidden',
          }}
        >
          <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path
              fill="#fff"
              d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"
            />
          </svg>
        </span>
      </a>

      {/* LinkedIn */}
      <a
        className="a2a_button_linkedin"
        href="#linkedin"
        onClick={handleLinkedInShare}
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
        style={{
          display: 'block',
          width: '32px',
          height: '32px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.15s ease, opacity 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <span
          className="a2a_svg a2a_s__default a2a_s_linkedin"
          style={{
            display: 'inline-block',
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            backgroundColor: 'rgb(0, 123, 181)',
            overflow: 'hidden',
          }}
        >
          <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path
              fill="#FFF"
              d="M6.227 12.61h4.19v13.48h-4.19zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187z"
            />
          </svg>
        </span>
      </a>

      {/* Copy Link */}
      <div style={{ position: 'relative' }}>
        <a
          className="a2a_button_copy_link"
          href="#copy_link"
          onClick={handleCopyLink}
          title="Copy Link"
          aria-label="Copy Link"
          style={{
            display: 'block',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.15s ease, opacity 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span
            className="a2a_svg a2a_s__default a2a_s_link"
            style={{
              display: 'inline-block',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              backgroundColor: 'rgb(136, 137, 144)',
              overflow: 'hidden',
            }}
          >
            <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '100%', height: '100%', display: 'block' }}>
              <path
                fill="#fff"
                d="M7.591 21.177q0-.54.377-.917l2.804-2.804a1.24 1.24 0 0 1 .913-.378q.565 0 .97.43-.038.041-.255.25-.215.21-.29.29a3 3 0 0 0-.2.256 1.1 1.1 0 0 0-.177.344 1.4 1.4 0 0 0-.046.37q0 .54.377.918a1.25 1.25 0 0 0 .918.377q.19.001.373-.047.189-.056.345-.175.135-.09.256-.2.15-.14.29-.29c.14-.142.223-.23.25-.254q.445.42.445.984 0 .539-.377.916l-2.778 2.79a1.24 1.24 0 0 1-.917.364q-.54-.001-.917-.35l-1.982-1.97a1.22 1.22 0 0 1-.378-.9zm9.477-9.504q0-.54.377-.917l2.777-2.79a1.24 1.24 0 0 1 .913-.378q.525-.001.917.364l1.984 1.968q.38.378.38.903 0 .54-.38.917l-2.802 2.804a1.24 1.24 0 0 1-.916.364q-.565 0-.97-.418.038-.04.255-.25a8 8 0 0 0 .29-.29q.108-.12.2-.255.121-.156.176-.344.048-.181.047-.37 0-.538-.377-.914a1.25 1.25 0 0 0-.917-.377q-.205 0-.37.046-.172.046-.346.175a4 4 0 0 0-.256.2q-.08.076-.29.29l-.25.258q-.441-.417-.442-.983zM5.003 21.177q0 1.617 1.146 2.736l1.982 1.968c.745.75 1.658 1.12 2.736 1.12q1.63 0 2.75-1.143l2.777-2.79c.75-.747 1.12-1.66 1.12-2.737q.002-1.66-1.183-2.818l1.186-1.185q1.16 1.185 2.805 1.186 1.617 0 2.75-1.13l2.803-2.81q1.127-1.132 1.128-2.748 0-1.62-1.146-2.738L23.875 6.12Q22.758 4.999 21.139 5q-1.63 0-2.75 1.146l-2.777 2.79c-.75.747-1.12 1.66-1.12 2.737q-.002 1.658 1.183 2.817l-1.186 1.186q-1.16-1.186-2.805-1.186-1.617 0-2.75 1.132L6.13 18.426Q5 19.559 5 21.176z"
              />
            </svg>
          </span>
        </a>

        {/* Copied Feedback Tooltip */}
        {copied && (
          <div
            style={{
              position: 'absolute',
              right: '42px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#1e293b',
              color: '#ffffff',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              pointerEvents: 'none',
              animation: 'fadeInOut 2.2s ease',
              zIndex: 100000,
            }}
          >
            Link copied!
          </div>
        )}
      </div>
    </div>
  );
}
