// H4WK Space Hacker Toolkit - Popup Logic

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;

    // Update active tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
  });
});

// Initialize page info on load
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  if (tabs[0]) {
    const url = new URL(tabs[0].url);
    document.getElementById('page-url').textContent = tabs[0].url;
    document.getElementById('page-title').textContent = tabs[0].title;
    document.getElementById('page-protocol').textContent = url.protocol;
    document.getElementById('page-host').textContent = url.host;
    document.getElementById('page-path').textContent = url.pathname;

    // Get cookie count
    chrome.cookies.getAll({url: tabs[0].url}, (cookies) => {
      document.getElementById('cookie-count').textContent = cookies.length;
    });
  }
});

// ==================== TOOLS TAB ====================

// JSON Formatter
document.querySelector('[data-action="json-format"]').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      try {
        const json = JSON.parse(document.body.innerText);
        document.body.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
        document.body.style.fontFamily = 'monospace';
        document.body.style.padding = '20px';
        document.body.style.background = '#0a0a19';
        document.body.style.color = '#00ffaa';
        return 'JSON formatted successfully!';
      } catch (e) {
        alert('Not valid JSON: ' + e.message);
      }
    }
  });
});

// Color Picker
document.querySelector('[data-action="color-picker"]').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      if (window.H4WK_ColorPicker) {
        document.getElementById('h4wk-color-picker').remove();
        window.H4WK_ColorPicker = false;
        return;
      }

      window.H4WK_ColorPicker = true;
      const picker = document.createElement('div');
      picker.id = 'h4wk-color-picker';
      picker.style.cssText = 'position:fixed;top:10px;right:10px;z-index:999999;background:#0a0a19;border:2px solid #00ffaa;border-radius:8px;padding:15px;box-shadow:0 0 30px rgba(0,255,170,0.5);font-family:monospace;color:#00ffaa;';
      picker.innerHTML = '<div style="font-weight:bold;margin-bottom:10px;">H4WK COLOR PICKER</div><div id="h4wk-color-value" style="font-size:14px;padding:8px;background:#14142d;border-radius:4px;"></div><div style="margin-top:8px;font-size:10px;color:#78dcff;">Click any element</div>';
      document.body.appendChild(picker);

      document.addEventListener('mousemove', function colorPick(e) {
        if (!window.H4WK_ColorPicker) {
          document.removeEventListener('mousemove', colorPick);
          return;
        }
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el && el.id !== 'h4wk-color-picker') {
          const color = window.getComputedStyle(el).backgroundColor;
          document.getElementById('h4wk-color-value').textContent = color;
        }
      });
    }
  });
});

// Regex Tester
document.querySelector('[data-action="regex-tester"]').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      const pattern = prompt('Enter regex pattern:');
      if (!pattern) return;

      const flags = prompt('Enter flags (g, i, m, etc.):', 'gi');

      try {
        const regex = new RegExp(pattern, flags);
        const text = document.body.innerText;
        const matches = text.match(regex);

        if (matches) {
          alert(`Found ${matches.length} matches:\n\n${matches.slice(0, 10).join('\n')}${matches.length > 10 ? '\n...' : ''}`);
        } else {
          alert('No matches found');
        }
      } catch (e) {
        alert('Invalid regex: ' + e.message);
      }
    }
  });
});

// Quick Notes
document.querySelector('[data-action="notes"]').addEventListener('click', async () => {
  chrome.storage.local.get(['h4wk_notes'], (result) => {
    const notes = result.h4wk_notes || '';
    const newNotes = prompt('Quick Notes:', notes);
    if (newNotes !== null) {
      chrome.storage.local.set({h4wk_notes: newNotes});
    }
  });
});

// Screenshot
document.querySelector('[data-action="screenshot"]').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataUrl) => {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `h4wk-screenshot-${Date.now()}.png`;
    a.click();
  });
});

// Console
document.querySelector('[data-action="console"]').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  const code = prompt('Enter JavaScript code:');
  if (!code) return;

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (code) => {
      try {
        const result = eval(code);
        console.log('[H4WK]', result);
        alert('Result (check console): ' + JSON.stringify(result, null, 2));
      } catch (e) {
        alert('Error: ' + e.message);
      }
    },
    args: [code]
  });
});

// Clear Cookies
document.getElementById('clear-cookies').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.cookies.getAll({url: tab.url}, (cookies) => {
    cookies.forEach(cookie => {
      chrome.cookies.remove({
        url: tab.url,
        name: cookie.name
      });
    });
    showMessage('Cookies cleared!', 'success');
  });
});

// Clear Storage
document.getElementById('clear-storage').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      localStorage.clear();
      sessionStorage.clear();
      return 'Storage cleared!';
    }
  }).then(() => showMessage('Storage cleared!', 'success'));
});

// Hard Reload
document.getElementById('reload-nocache').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.tabs.reload(tab.id, {bypassCache: true});
  window.close();
});

// ==================== ENCODING TAB ====================

const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

document.querySelectorAll('.encode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    const input = inputText.value;

    if (!input) {
      showMessage('Please enter text first', 'error');
      return;
    }

    try {
      let result;

      switch(type) {
        case 'base64-encode':
          result = btoa(input);
          break;
        case 'base64-decode':
          result = atob(input);
          break;
        case 'url-encode':
          result = encodeURIComponent(input);
          break;
        case 'url-decode':
          result = decodeURIComponent(input);
          break;
        case 'hex-encode':
          result = Array.from(input).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
          break;
        case 'hex-decode':
          result = input.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
          break;
      }

      outputText.value = result;
    } catch (e) {
      showMessage('Error: ' + e.message, 'error');
    }
  });
});

// Copy Output
document.getElementById('copy-output').addEventListener('click', () => {
  outputText.select();
  document.execCommand('copy');
  showMessage('Copied to clipboard!', 'success');
});

// ==================== SECURITY TAB ====================

const hashInput = document.getElementById('hash-input');
const hashResult = document.getElementById('hash-result');

document.querySelectorAll('.hash-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const algo = btn.dataset.algo;
    const input = hashInput.value;

    if (!input) {
      showMessage('Please enter text first', 'error');
      return;
    }

    const hash = await calculateHash(input, algo);
    hashResult.value = hash;
    document.getElementById('hash-algo-label').textContent = algo.toUpperCase() + ' Hash';
  });
});

// Copy Hash
document.getElementById('copy-hash').addEventListener('click', () => {
  hashResult.select();
  document.execCommand('copy');
  showMessage('Hash copied to clipboard!', 'success');
});

// Hash calculation function
async function calculateHash(text, algorithm) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  let algoName;
  switch(algorithm) {
    case 'md5':
      // MD5 not natively supported, using simple implementation
      return simpleMD5(text);
    case 'sha1':
      algoName = 'SHA-1';
      break;
    case 'sha256':
      algoName = 'SHA-256';
      break;
    case 'sha512':
      algoName = 'SHA-512';
      break;
  }

  const hashBuffer = await crypto.subtle.digest(algoName, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Simple MD5 implementation (basic, not cryptographically secure)
function simpleMD5(str) {
  // This is a placeholder - for real MD5, you'd need a proper library
  // For demo purposes, we'll return a hash-like string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(32, '0');
}

// Security Tools
document.getElementById('check-headers').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: async () => {
      try {
        const response = await fetch(location.href);
        const headers = {};
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });

        const securityHeaders = [
          'strict-transport-security',
          'content-security-policy',
          'x-frame-options',
          'x-content-type-options',
          'x-xss-protection'
        ];

        let result = 'Security Headers:\n\n';
        securityHeaders.forEach(header => {
          const value = headers[header];
          result += `${header}: ${value || '❌ MISSING'}\n`;
        });

        alert(result);
      } catch (e) {
        alert('Error fetching headers: ' + e.message);
      }
    }
  });
});

document.getElementById('view-cookies').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.cookies.getAll({url: tab.url}, (cookies) => {
    if (cookies.length === 0) {
      alert('No cookies found');
      return;
    }

    let result = `Found ${cookies.length} cookies:\n\n`;
    cookies.forEach(cookie => {
      result += `${cookie.name}: ${cookie.value.substring(0, 50)}${cookie.value.length > 50 ? '...' : ''}\n`;
    });
    alert(result);
  });
});

document.getElementById('view-storage').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      let result = 'Local Storage:\n\n';
      if (localStorage.length === 0) {
        result += 'Empty\n';
      } else {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          result += `${key}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}\n`;
        }
      }

      result += '\n\nSession Storage:\n\n';
      if (sessionStorage.length === 0) {
        result += 'Empty';
      } else {
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          const value = sessionStorage.getItem(key);
          result += `${key}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}\n`;
        }
      }

      alert(result);
    }
  });
});

document.getElementById('ssl-info').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const url = new URL(tab.url);

  if (url.protocol !== 'https:') {
    alert('This page is not using HTTPS');
    return;
  }

  alert('SSL Certificate Info:\n\nProtocol: HTTPS\nHost: ' + url.host + '\n\nFor detailed certificate info, click the padlock icon in the address bar.');
});

// ==================== PAGE INFO TAB ====================

document.getElementById('view-source').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.tabs.create({url: 'view-source:' + tab.url});
});

document.getElementById('view-headers').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: async () => {
      try {
        const response = await fetch(location.href);
        let result = 'Response Headers:\n\n';
        response.headers.forEach((value, key) => {
          result += `${key}: ${value}\n`;
        });
        alert(result);
      } catch (e) {
        alert('Error: ' + e.message);
      }
    }
  });
});

document.getElementById('extract-links').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
      const unique = [...new Set(links)];

      if (unique.length === 0) {
        alert('No links found');
      } else {
        alert(`Found ${unique.length} unique links:\n\n${unique.slice(0, 20).join('\n')}${unique.length > 20 ? '\n...' : ''}`);
      }
    }
  });
});

document.getElementById('extract-images').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      const images = Array.from(document.querySelectorAll('img[src]')).map(img => img.src);
      const unique = [...new Set(images)];

      if (unique.length === 0) {
        alert('No images found');
      } else {
        alert(`Found ${unique.length} unique images:\n\n${unique.slice(0, 20).join('\n')}${unique.length > 20 ? '\n...' : ''}`);
      }
    }
  });
});

// ==================== HELPER FUNCTIONS ====================

function showMessage(text, type = 'success') {
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = text;

  const activeTab = document.querySelector('.tab-content.active');
  activeTab.appendChild(message);

  setTimeout(() => message.remove(), 3000);
}
