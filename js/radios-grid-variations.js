import updateAriaAnnouncement from "./aria-announcement.js"

export default function radiosGridVariations() {
  const formgrid = document.getElementById("form-grid-variations")
  const grid = document.getElementById("grid")
  const radios = document.querySelectorAll("input[name='grid-variation']")
  const gridVariationNumber = document.getElementById("grid-variation-number")
  gridVariationNumber.textContent = "0"

  const suggestedOption = document.getElementById("suggested-option")
  suggestedOption.textContent = "(None)"

  const gridClasses = [
    "grid-0",
    "grid-1",
    "grid-2",
    "grid-3",
    "grid-4",
    "grid-5",
    "grid-6",
    "grid-7",
    "grid-8",
  ]

  function removeClass(array, classToRemove) {
    // Removes all other grid-N classes except the one selected
    return array.filter((classItem) => classItem !== classToRemove)
  }

  formgrid.addEventListener("change", (e) => {
    e.preventDefault()

    radios.forEach((radio) => {
      if (radio.checked) {
        const selectedClass = radio.value
        const classesToRemove = removeClass(gridClasses, selectedClass)

        // Add selected class and remove all others
        grid.classList.add(selectedClass)
        grid.classList.remove(...classesToRemove)

        // Extract and display the grid variation number
        const variationNumber = selectedClass.split("-")[1]
        gridVariationNumber.textContent = variationNumber

        // Determine suggested reading flow
        const readingFlowSuggestion = [
          "grid-1",
          "grid-2",
          "grid-4",
          "grid-8",
        ].includes(selectedClass)
          ? "grid-columns"
          : selectedClass === "grid-0"
          ? "(None)"
          : "grid-rows"

        suggestedOption.textContent = readingFlowSuggestion

        // 📣 Update the aria live region (only grid variation changes)
        updateAriaAnnouncement(variationNumber, null)
      }
    })
  })
}
