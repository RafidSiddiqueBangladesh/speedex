// Content script to control video playback speed

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setSpeed') {
    setVideoSpeed(request.speed);
    sendResponse({ success: true });
  }
});

function setVideoSpeed(speed) {
  // Get all video elements
  const videos = document.querySelectorAll('video');
  
  if (videos.length > 0) {
    videos.forEach(video => {
      video.playbackRate = speed;
    });
  } else {
    // Try to set speed on HTML5 audio elements as well
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.playbackRate = speed;
    });
  }

  // Also try to find and set speed on iframe videos (YouTube, etc.)
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc) {
        const videos = iframeDoc.querySelectorAll('video');
        videos.forEach(video => {
          video.playbackRate = speed;
        });
      }
    } catch (e) {
      // Cannot access cross-origin iframes
    }
  });
}

// Set up a mutation observer to handle dynamically added videos
const observer = new MutationObserver(() => {
  // Optionally reapply speed to newly added videos
});

observer.observe(document, {
  childList: true,
  subtree: true
});

// Also listen for keyboard shortcuts (optional)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey) {
    if (e.key === '=' || e.key === '+') {
      // Speed up
      const videos = document.querySelectorAll('video');
      if (videos.length > 0) {
        const newSpeed = Math.min(4, videos[0].playbackRate + 0.25);
        setVideoSpeed(newSpeed);
      }
      e.preventDefault();
    } else if (e.key === '-') {
      // Slow down
      const videos = document.querySelectorAll('video');
      if (videos.length > 0) {
        const newSpeed = Math.max(0.25, videos[0].playbackRate - 0.25);
        setVideoSpeed(newSpeed);
      }
      e.preventDefault();
    }
  }
});
