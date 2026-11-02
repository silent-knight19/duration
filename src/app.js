import { formatDuration } from './duration.js';

const secondsInput = document.getElementById('seconds-input');
const formatBtn = document.getElementById('format-btn');
const resultDisplay = document.getElementById('result-display');
const durationForm = document.getElementById('duration-form');
const presetButtons = document.querySelectorAll('.preset-btn');

function updateFormattedDuration() {
  const rawValue = secondsInput.value.trim();
  const seconds = rawValue === '' ? NaN : Number(rawValue);
  const formatted = formatDuration(seconds);
  resultDisplay.textContent = formatted;
}

durationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateFormattedDuration();
});

formatBtn.addEventListener('click', () => {
  updateFormattedDuration();
});

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    secondsInput.value = btn.dataset.seconds;
    updateFormattedDuration();
  });
});

// Format initial default value (5,400 seconds) on page load
updateFormattedDuration();

