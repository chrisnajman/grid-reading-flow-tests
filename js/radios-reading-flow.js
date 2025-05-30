import updateAriaAnnouncement from "./aria-announcement.js"

export default function radiosReadingFlow() {
  const form = document.getElementById("form")
  const grid = document.getElementById("grid")
  const radios = document.querySelectorAll("input[name='reading-flow']")
  const readingFlowType = document.getElementById("reading-flow-type")
  readingFlowType.textContent = "(None)"

  form.addEventListener("change", (e) => {
    e.preventDefault()

    radios.forEach((radio) => {
      if (radio.checked) {
        const selectedFlow = radio.value

        // Always clear both flow classes before setting new one
        grid.classList.remove("grid-rows", "grid-columns")

        if (selectedFlow === "") {
          readingFlowType.textContent = "(None)"
        } else {
          grid.classList.add(selectedFlow)
          readingFlowType.textContent = selectedFlow
        }

        // 📣 Update the aria live region (only reading flow changes)
        const flowText = selectedFlow || "(None)"
        updateAriaAnnouncement(null, flowText)
      }
    })
  })
}
