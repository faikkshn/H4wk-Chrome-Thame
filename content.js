// H4WK Space Hacker Toolkit - Content Script

console.log('%c[H4WK] 🦅 Space Hacker Toolkit Active', 'color: #00ffaa; font-weight: bold; font-size: 14px;');
console.log('%cVersion 1.0.0 - Built for Developers & Hackers', 'color: #78dcff; font-size: 12px;');

// Initialize H4WK namespace
window.H4WK = window.H4WK || {};

// Add H4WK banner to console
window.H4WK.showBanner = () => {
  console.log(`
%c╦ ╦╦ ╦╦ ╦╦╔═
%c╠═╣╠═╣║║║╠╩╗
%c╩ ╩╩ ╩╚╩╝╩ ╩
%cSpace Hacker Toolkit
%cPress Alt+H for tools
`,
    'color: #00ffaa; font-weight: bold; font-size: 20px;',
    'color: #00ffaa; font-weight: bold; font-size: 20px;',
    'color: #00ffaa; font-weight: bold; font-size: 20px;',
    'color: #78dcff; font-size: 12px;',
    'color: #a0a0c0; font-size: 10px;'
  );
};

// Quick access keyboard shortcuts
let shiftPressed = false;
let altPressed = false;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Shift') shiftPressed = true;
  if (e.key === 'Alt') altPressed = true;

  // Alt+H: Show H4WK banner
  if (altPressed && e.key === 'h') {
    e.preventDefault();
    window.H4WK.showBanner();
    chrome.runtime.sendMessage({action: 'notification', title: 'H4WK Toolkit', message: 'Press Ctrl+Shift+H to open popup'});
  }

  // Alt+J: JSON prettify on page
  if (altPressed && e.key === 'j') {
    e.preventDefault();
    try {
      const json = JSON.parse(document.body.innerText);
      document.body.innerHTML = `<pre style="font-family: monospace; padding: 20px; background: #0a0a19; color: #00ffaa;">${JSON.stringify(json, null, 2)}</pre>`;
      console.log('[H4WK] JSON formatted');
    } catch (e) {
      console.error('[H4WK] Not valid JSON');
    }
  }

  // Alt+C: Copy current URL
  if (altPressed && e.key === 'c') {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    console.log('[H4WK] URL copied:', window.location.href);
    showToast('URL copied to clipboard');
  }

  // Alt+S: Take screenshot (via message to background)
  if (altPressed && e.key === 's') {
    e.preventDefault();
    chrome.runtime.sendMessage({action: 'notification', title: 'Screenshot', message: 'Use extension popup to capture'});
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Shift') shiftPressed = false;
  if (e.key === 'Alt') altPressed = false;
});

// Utility: Show toast notification
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999999;
    background: linear-gradient(135deg, #0a0a19 0%, #14142d 100%);
    color: #00ffaa;
    padding: 15px 20px;
    border-radius: 8px;
    border: 2px solid #00ffaa;
    box-shadow: 0 0 30px rgba(0, 255, 170, 0.5);
    font-family: 'Consolas', monospace;
    font-size: 14px;
    font-weight: bold;
    animation: h4wk-slide-in 0.3s ease;
  `;

  // Add animation keyframes
  if (!document.getElementById('h4wk-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'h4wk-toast-styles';
    style.textContent = `
      @keyframes h4wk-slide-in {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes h4wk-slide-out {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(100px);
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'h4wk-slide-out 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Utility: DOM element inspector
window.H4WK.inspect = (selector) => {
  const elements = document.querySelectorAll(selector);
  console.log(`[H4WK] Found ${elements.length} elements for "${selector}"`);
  elements.forEach((el, i) => {
    console.log(`[${i}]`, el);
  });
  return elements;
};

// Utility: Extract all links
window.H4WK.extractLinks = () => {
  const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
  const unique = [...new Set(links)];
  console.table(unique);
  return unique;
};

// Utility: Extract all images
window.H4WK.extractImages = () => {
  const images = Array.from(document.querySelectorAll('img[src]')).map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.naturalWidth,
    height: img.naturalHeight
  }));
  console.table(images);
  return images;
};

// Utility: Extract all scripts
window.H4WK.extractScripts = () => {
  const scripts = Array.from(document.querySelectorAll('script[src]')).map(s => s.src);
  console.table(scripts);
  return scripts;
};

// Utility: Extract all forms
window.H4WK.extractForms = () => {
  const forms = Array.from(document.querySelectorAll('form')).map(form => ({
    action: form.action,
    method: form.method,
    fields: Array.from(form.elements).map(el => ({
      name: el.name,
      type: el.type,
      value: el.value
    }))
  }));
  console.table(forms);
  return forms;
};

// Utility: Get page metadata
window.H4WK.getMetadata = () => {
  const metadata = {
    title: document.title,
    url: window.location.href,
    protocol: window.location.protocol,
    host: window.location.host,
    pathname: window.location.pathname,
    cookies: document.cookie.split(';').length,
    localStorage: Object.keys(localStorage).length,
    sessionStorage: Object.keys(sessionStorage).length,
    scripts: document.querySelectorAll('script').length,
    images: document.querySelectorAll('img').length,
    links: document.querySelectorAll('a').length,
    forms: document.querySelectorAll('form').length
  };
  console.table(metadata);
  return metadata;
};

// Utility: Monitor XHR/Fetch requests
window.H4WK.monitorRequests = () => {
  console.log('[H4WK] Starting request monitor...');

  // Intercept XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    console.log(`%c[H4WK XHR] ${method} ${url}`, 'color: #00ffaa;');
    return originalXHROpen.apply(this, arguments);
  };

  // Intercept Fetch
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    console.log(`%c[H4WK FETCH] ${args[0]}`, 'color: #78dcff;');
    return originalFetch.apply(this, args);
  };

  showToast('Request monitoring enabled');
};

// Utility: Stop monitoring
window.H4WK.stopMonitoring = () => {
  location.reload();
};

// Utility: Inject custom CSS
window.H4WK.injectCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  console.log('[H4WK] CSS injected');
};

// Utility: Toggle dark mode
window.H4WK.darkMode = () => {
  const style = document.createElement('style');
  style.id = 'h4wk-dark-mode';
  style.textContent = `
    html {
      filter: invert(1) hue-rotate(180deg);
    }
    img, video, [style*="background-image"] {
      filter: invert(1) hue-rotate(180deg);
    }
  `;

  if (document.getElementById('h4wk-dark-mode')) {
    document.getElementById('h4wk-dark-mode').remove();
    console.log('[H4WK] Dark mode disabled');
  } else {
    document.head.appendChild(style);
    console.log('[H4WK] Dark mode enabled');
    showToast('Dark mode enabled');
  }
};

// Utility: Highlight all links
window.H4WK.highlightLinks = () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.border = '2px solid #00ffaa';
    link.style.boxShadow = '0 0 10px rgba(0, 255, 170, 0.5)';
  });
  console.log(`[H4WK] Highlighted ${links.length} links`);
  showToast(`Highlighted ${links.length} links`);
};

// Utility: Remove all images
window.H4WK.removeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => img.remove());
  console.log(`[H4WK] Removed ${images.length} images`);
  showToast(`Removed ${images.length} images`);
};

// Utility: Get all cookies
window.H4WK.getCookies = () => {
  const cookies = document.cookie.split(';').map(c => {
    const [name, value] = c.trim().split('=');
    return {name, value};
  });
  console.table(cookies);
  return cookies;
};

// Utility: Clear console
window.H4WK.clear = () => {
  console.clear();
  window.H4WK.showBanner();
};

// Message listener from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'ping') {
    sendResponse({status: 'active'});
  }

  if (request.action === 'executeCode') {
    try {
      const result = eval(request.code);
      sendResponse({success: true, result: result});
    } catch (e) {
      sendResponse({success: false, error: e.message});
    }
  }

  return true;
});

// Auto-detect JSON pages and offer to format
if (document.contentType === 'application/json' ||
    (document.body && document.body.children.length === 1 && document.body.children[0].tagName === 'PRE')) {
  try {
    const text = document.body.innerText;
    const json = JSON.parse(text);

    // Auto-format JSON
    document.body.innerHTML = `
      <div style="font-family: monospace; padding: 20px; background: #0a0a19; color: #00ffaa; min-height: 100vh;">
        <div style="position: fixed; top: 10px; right: 10px; background: #14142d; padding: 10px; border: 2px solid #00ffaa; border-radius: 8px;">
          <strong style="color: #00ffaa;">H4WK JSON Formatter</strong>
        </div>
        <pre style="margin-top: 60px; line-height: 1.6;">${JSON.stringify(json, null, 2)}</pre>
      </div>
    `;
    console.log('[H4WK] JSON auto-formatted');
  } catch (e) {
    // Not JSON, ignore
  }
}

// Log available H4WK utilities
console.log('%cH4WK Utilities Available:', 'color: #78dcff; font-weight: bold; font-size: 12px;');
console.log('%c• H4WK.showBanner()          - Show H4WK banner', 'color: #a0a0c0;');
console.log('%c• H4WK.inspect(selector)     - Inspect DOM elements', 'color: #a0a0c0;');
console.log('%c• H4WK.extractLinks()        - Extract all links', 'color: #a0a0c0;');
console.log('%c• H4WK.extractImages()       - Extract all images', 'color: #a0a0c0;');
console.log('%c• H4WK.extractScripts()      - Extract all scripts', 'color: #a0a0c0;');
console.log('%c• H4WK.extractForms()        - Extract all forms', 'color: #a0a0c0;');
console.log('%c• H4WK.getMetadata()         - Get page metadata', 'color: #a0a0c0;');
console.log('%c• H4WK.monitorRequests()     - Monitor XHR/Fetch', 'color: #a0a0c0;');
console.log('%c• H4WK.darkMode()            - Toggle dark mode', 'color: #a0a0c0;');
console.log('%c• H4WK.highlightLinks()      - Highlight all links', 'color: #a0a0c0;');
console.log('%c• H4WK.removeImages()        - Remove all images', 'color: #a0a0c0;');
console.log('%c• H4WK.getCookies()          - Get all cookies', 'color: #a0a0c0;');
console.log('%c• H4WK.clear()               - Clear console', 'color: #a0a0c0;');
console.log('%c\nKeyboard Shortcuts:', 'color: #78dcff; font-weight: bold; font-size: 12px;');
console.log('%c• Alt+H                      - Show banner', 'color: #a0a0c0;');
console.log('%c• Alt+J                      - Format JSON', 'color: #a0a0c0;');
console.log('%c• Alt+C                      - Copy URL', 'color: #a0a0c0;');
console.log('%c• Ctrl+Shift+H               - Open H4WK Toolkit', 'color: #a0a0c0;');

// Initialize
window.H4WK.version = '1.0.0';
window.H4WK.author = 'H4WK';
console.log(`%c\nH4WK Toolkit ${window.H4WK.version} - Ready`, 'color: #00ffaa; font-weight: bold;');
