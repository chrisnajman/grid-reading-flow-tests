const ariaAnnouncement = document.getElementById("aria-announcement")

// Store the current values so we can intelligently update the message
let currentGridVariation = "0"
let currentReadingFlow = "(None)"

/**
 * Updates the aria live region text.
 * Accepts `newGridVariation` or `newReadingFlow`, or both.
 * Pass `null` to leave a value unchanged.
 */
export default function updateAriaAnnouncement(
  newGridVariation,
  newReadingFlow
) {
  if (newGridVariation !== null) {
    currentGridVariation = newGridVariation
  }

  if (newReadingFlow !== null) {
    currentReadingFlow = newReadingFlow
  }

  ariaAnnouncement.textContent = `Grid variation ${currentGridVariation}, reading flow set to ${currentReadingFlow}. Use Tab to navigate.`
}
