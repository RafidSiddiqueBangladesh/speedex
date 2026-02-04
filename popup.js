// Handle speed button clicks
document.querySelectorAll('.speed-btn').forEach(button => {
  button.addEventListener('click', () => {
    const speed = parseFloat(button.getAttribute('data-speed'));
    setSpeed(speed);
    updateActiveButton(button);
    updateSlider(speed);
  });
});

// Handle custom speed slider
document.getElementById('speedSlider').addEventListener('input', (e) => {
  const speed = parseFloat(e.target.value);
  setSpeed(speed);
  updateSpeedDisplay(speed);
  clearActiveButton();
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
  setSpeed(1);
  updateSlider(1);
  updateActiveButton(document.getElementById('normal'));
});

function setSpeed(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'setSpeed',
      speed: speed
    }).catch(err => {
      console.log('Could not connect to content script');
    });
  });
  updateSpeedDisplay(speed);
}

function updateActiveButton(button) {
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

function clearActiveButton() {
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

function updateSlider(speed) {
  document.getElementById('speedSlider').value = speed;
}

function updateSpeedDisplay(speed) {
  document.getElementById('speedValue').textContent = speed.toFixed(2);
}
