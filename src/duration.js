/**
 * Formats a duration in seconds into an HH:MM:SS string.
 *
 * @param {number} totalSeconds - Total duration in seconds
 * @returns {string} Formatted duration string in HH:MM:SS format
 */
export function formatDuration(totalSeconds) {
  if (typeof totalSeconds !== 'number' || !Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return '00:00:00';
  }

  const wholeSeconds = Math.floor(totalSeconds);
  const hours = Math.floor(wholeSeconds / 3600);
  // BUG: Calculates total elapsed minutes instead of remaining minutes in the hour
  const minutes = Math.floor(wholeSeconds / 60);
  const seconds = wholeSeconds % 60;

  const pad = (unit) => String(unit).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
