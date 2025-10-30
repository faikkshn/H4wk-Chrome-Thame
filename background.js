// H4WK Space Hacker Toolkit - Background Service Worker

console.log('H4WK Toolkit: Background service worker initialized');

// Installation handler
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('H4WK Toolkit: Extension installed successfully');

    // Set default storage values
    chrome.storage.local.set({
      h4wk_notes: '',
      h4wk_settings: {
        theme: 'dark',
        notifications: true
      }
    });

    // Open welcome page
    chrome.tabs.create({
      url: 'https://github.com/faikkshn/H4wk-Chrome-Thame'
    });
  } else if (details.reason === 'update') {
    console.log('H4WK Toolkit: Extension updated to version ' + chrome.runtime.getManifest().version);
  }
});

// Context menu for quick access
chrome.runtime.onInstalled.addListener(() => {
  // Remove existing menus first
  chrome.contextMenus.removeAll(() => {
    // Main menu
    chrome.contextMenus.create({
      id: 'h4wk-main',
      title: 'H4WK Toolkit',
      contexts: ['all']
    });

    // Encoding submenu
    chrome.contextMenus.create({
      id: 'h4wk-encoding',
      parentId: 'h4wk-main',
      title: 'Encode/Decode',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-base64-encode',
      parentId: 'h4wk-encoding',
      title: 'Base64 Encode',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-base64-decode',
      parentId: 'h4wk-encoding',
      title: 'Base64 Decode',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-url-encode',
      parentId: 'h4wk-encoding',
      title: 'URL Encode',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-url-decode',
      parentId: 'h4wk-encoding',
      title: 'URL Decode',
      contexts: ['selection']
    });

    // Hash submenu
    chrome.contextMenus.create({
      id: 'h4wk-hash',
      parentId: 'h4wk-main',
      title: 'Hash',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-sha256',
      parentId: 'h4wk-hash',
      title: 'SHA-256',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-sha512',
      parentId: 'h4wk-hash',
      title: 'SHA-512',
      contexts: ['selection']
    });

    // Quick tools
    chrome.contextMenus.create({
      id: 'h4wk-separator-1',
      parentId: 'h4wk-main',
      type: 'separator',
      contexts: ['all']
    });

    chrome.contextMenus.create({
      id: 'h4wk-save-note',
      parentId: 'h4wk-main',
      title: 'Save to Quick Notes',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-search-github',
      parentId: 'h4wk-main',
      title: 'Search on GitHub',
      contexts: ['selection']
    });

    chrome.contextMenus.create({
      id: 'h4wk-search-stackoverflow',
      parentId: 'h4wk-main',
      title: 'Search on StackOverflow',
      contexts: ['selection']
    });
  });
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const text = info.selectionText;

  switch(info.menuItemId) {
    case 'h4wk-base64-encode':
      await copyToClipboard(btoa(text), tab.id);
      showNotification('Base64 Encoded', 'Text copied to clipboard');
      break;

    case 'h4wk-base64-decode':
      try {
        await copyToClipboard(atob(text), tab.id);
        showNotification('Base64 Decoded', 'Text copied to clipboard');
      } catch (e) {
        showNotification('Error', 'Invalid Base64 string');
      }
      break;

    case 'h4wk-url-encode':
      await copyToClipboard(encodeURIComponent(text), tab.id);
      showNotification('URL Encoded', 'Text copied to clipboard');
      break;

    case 'h4wk-url-decode':
      await copyToClipboard(decodeURIComponent(text), tab.id);
      showNotification('URL Decoded', 'Text copied to clipboard');
      break;

    case 'h4wk-sha256':
      const sha256 = await hashText(text, 'SHA-256');
      await copyToClipboard(sha256, tab.id);
      showNotification('SHA-256 Hash', 'Copied to clipboard');
      break;

    case 'h4wk-sha512':
      const sha512 = await hashText(text, 'SHA-512');
      await copyToClipboard(sha512, tab.id);
      showNotification('SHA-512 Hash', 'Copied to clipboard');
      break;

    case 'h4wk-save-note':
      chrome.storage.local.get(['h4wk_notes'], (result) => {
        const notes = result.h4wk_notes || '';
        const timestamp = new Date().toLocaleString();
        const newNotes = `${notes}\n\n[${timestamp}]\n${text}`;
        chrome.storage.local.set({h4wk_notes: newNotes});
        showNotification('Saved', 'Added to Quick Notes');
      });
      break;

    case 'h4wk-search-github':
      chrome.tabs.create({
        url: `https://github.com/search?q=${encodeURIComponent(text)}&type=code`
      });
      break;

    case 'h4wk-search-stackoverflow':
      chrome.tabs.create({
        url: `https://stackoverflow.com/search?q=${encodeURIComponent(text)}`
      });
      break;
  }
});

// Keyboard shortcut handler
chrome.commands.onCommand.addListener((command) => {
  if (command === '_execute_action') {
    chrome.action.openPopup();
  }
});

// Message handler from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('H4WK Toolkit: Message received', request);

  if (request.action === 'getPageInfo') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        sendResponse({
          url: tabs[0].url,
          title: tabs[0].title,
          favIconUrl: tabs[0].favIconUrl
        });
      }
    });
    return true; // Keep channel open for async response
  }

  if (request.action === 'notification') {
    showNotification(request.title, request.message);
  }

  if (request.action === 'openDevTools') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.debugger.attach({tabId: tabs[0].id}, '1.3');
      }
    });
  }
});

// Web request monitoring (for network analysis)
chrome.webRequest.onCompleted.addListener(
  (details) => {
    // Log completed requests for debugging
    if (details.type === 'main_frame' || details.type === 'xmlhttprequest') {
      console.log(`H4WK: Request completed - ${details.method} ${details.url} [${details.statusCode}]`);
    }
  },
  {urls: ["<all_urls>"]}
);

// Helper: Copy text to clipboard
async function copyToClipboard(text, tabId) {
  try {
    await chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      },
      args: [text]
    });
  } catch (e) {
    console.error('Copy failed:', e);
  }
}

// Helper: Hash text
async function hashText(text, algorithm) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Helper: Show notification
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: `H4WK: ${title}`,
    message: message,
    priority: 1
  });
}

// Badge update on tab change
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.action.setBadgeBackgroundColor({color: '#00ffaa'});
  chrome.action.setBadgeText({text: '', tabId: activeInfo.tabId});
});

// Keep service worker alive
let keepAliveInterval;

function keepAlive() {
  keepAliveInterval = setInterval(() => {
    console.log('H4WK: Service worker heartbeat');
  }, 20000); // Every 20 seconds
}

keepAlive();

// Clean up on shutdown
chrome.runtime.onSuspend.addListener(() => {
  console.log('H4WK: Service worker shutting down');
  clearInterval(keepAliveInterval);
});

console.log('H4WK Toolkit: Background service worker ready');
