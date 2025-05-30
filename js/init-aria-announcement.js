import radiosGridVariations from "./radios-grid-variations.js"
import radiosReadingFlow from "./radios-reading-flow.js"
import updateAriaAnnouncement from "./aria-announcement.js"

export default function initAriaAnnouncement() {
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize both radio modules (so their event listeners attach)
    radiosGridVariations()
    radiosReadingFlow()

    // Get the currently checked radio from grid variations
    const checkedGridRadio = document.querySelector(
      "input[name='grid-variation']:checked"
    )
    const currentGridVariation = checkedGridRadio
      ? checkedGridRadio.value.split("-")[1]
      : "0"

    // Get the currently checked radio from reading flow
    const checkedReadingFlowRadio = document.querySelector(
      "input[name='reading-flow']:checked"
    )
    const currentReadingFlow = checkedReadingFlowRadio
      ? checkedReadingFlowRadio.value || "(None)"
      : "(None)"

    // Update the live region once on page load
    updateAriaAnnouncement(currentGridVariation, currentReadingFlow)
  })
}
