// H4WK Space Hacker - New Tab Page Logic

// Update clock
function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateStr;
}

// Initialize clock
updateClock();
setInterval(updateClock, 1000);

// Quick access buttons
document.getElementById('open-toolkit').addEventListener('click', () => {
  chrome.action.openPopup();
});

document.getElementById('open-console').addEventListener('click', () => {
  // This will open DevTools programmatically if permissions allow
  // For now, just show a message
  alert('Press F12 to open Developer Console\n\nThen try: H4WK.showBanner()');
});

document.getElementById('open-github').addEventListener('click', () => {
  window.location.href = 'https://github.com';
});

document.getElementById('open-stackoverflow').addEventListener('click', () => {
  window.location.href = 'https://stackoverflow.com';
});

// Search functionality
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch('google');
  }
});

document.getElementById('search-google').addEventListener('click', () => {
  performSearch('google');
});

document.getElementById('search-github').addEventListener('click', () => {
  performSearch('github');
});

function performSearch(engine) {
  const query = searchInput.value.trim();
  if (!query) return;

  // Check if it's a URL
  if (query.includes('.') && !query.includes(' ')) {
    const url = query.startsWith('http') ? query : 'https://' + query;
    window.location.href = url;
    return;
  }

  // Search on selected engine
  if (engine === 'google') {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  } else if (engine === 'github') {
    window.location.href = `https://github.com/search?q=${encodeURIComponent(query)}&type=code`;
  }
}

// Focus search on load
searchInput.focus();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl+Shift+H - Open toolkit (handled by extension)
  // Alt+K - Focus search
  if (e.altKey && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }

  // Escape - Clear search
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchInput.blur();
  }
});

// Add scan line effect
function createScanLine() {
  const scanLine = document.createElement('div');
  scanLine.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffaa, transparent);
    box-shadow: 0 0 20px #00ffaa;
    animation: scan 4s linear infinite;
    z-index: 9999;
    pointer-events: none;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes scan {
      0% {
        transform: translateY(0);
        opacity: 0.8;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(scanLine);
}

// Initialize scan line
createScanLine();

// Add stars animation
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;

    star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: #00ffaa;
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: 0;
      box-shadow: 0 0 ${size * 2}px #00ffaa;
      animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
    `;

    starsContainer.appendChild(star);
  }

  const twinkleStyle = document.createElement('style');
  twinkleStyle.textContent = `
    @keyframes twinkle {
      0%, 100% {
        opacity: 0;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  `;

  document.head.appendChild(twinkleStyle);
  document.body.appendChild(starsContainer);
}

// Initialize stars
createStars();

// Console greeting
console.log('%c╦ ╦╦ ╦╦ ╦╦╔═', 'color: #00ffaa; font-weight: bold; font-size: 20px;');
console.log('%c╠═╣╠═╣║║║╠╩╗', 'color: #00ffaa; font-weight: bold; font-size: 20px;');
console.log('%c╩ ╩╩ ╩╚╩╝╩ ╩', 'color: #00ffaa; font-weight: bold; font-size: 20px;');
console.log('%cSpace Hacker Toolkit - New Tab', 'color: #78dcff; font-size: 14px;');
console.log('%cPress Ctrl+Shift+H to open toolkit', 'color: #a0a0c0; font-size: 12px;');
console.log('%cVersion 1.0.0', 'color: #a0a0c0; font-size: 10px;');

// Load greeting from storage
chrome.storage.local.get(['h4wk_notes'], (result) => {
  if (result.h4wk_notes) {
    console.log('%cYou have saved notes in H4WK Toolkit', 'color: #00ffaa; font-size: 12px;');
  }
});

console.log('\n%cAvailable on any page: window.H4WK utilities', 'color: #78dcff; font-weight: bold;');
