# Grid `reading-flow` Tests

This web page demonstrates and tests the new experimental CSS property `reading-flow`, which allows developers to define how focus navigation behaves in a grid layout when users press the <kbd>Tab</kbd> key. It addresses accessibility and usability concerns by explicitly setting keyboard reading order to follow either rows or columns in a CSS Grid.

> [!IMPORTANT]
> Currently (06/07/2025) working in <b>Chrome v.137, Edge v.137, Chrome for Android v.137 and Android Browser v.137. To check supported browsers see [Caniuse](https://caniuse.com/?search=reading-flow).

> [!NOTE]
> If the user's browser does not support `reading-flow`, a "not-supported" message is displayed in the page `header`.

## Features

- Interactive form to choose from nine distinct grid layout configurations
- Toggle for `reading-flow` behavior: `grid-rows`, `grid-columns`, or none
- Visual representation of grid layout with labeled grid areas (1–9)
- Updates reading order dynamically with JavaScript and CSS
- Highlights suggested reading-flow based on grid structure
- Fully accessible and keyboard-navigable
- Responsive layout for various screen sizes

### Other

- Loading animation
- Theme switcher.

[View on GitPage](https://chrisnajman.github.io/grid-reading-flow-tests)

## How to Use

- Choose a grid layout using the numbered radio buttons.
- Select a `reading-flow` option to determine keyboard tabbing direction.
- Use the <kbd>Tab</kbd> key to navigate through the grid items.
- Observe how focus moves according to the grid layout and selected flow.
- Refer to the suggested `reading-flow` value displayed for optimal tabbing experience.

## CSS

> [!NOTE]
> VSCode currently (30/05/2025) flags the classes `.grid-rows` and `.grid-columns` as 'problems'. Please ignore the warnings.

The `reading-flow` property and values used to control the grids are:

- `reading-flow: grid-rows`
- `reading-flow: grid-columns`

These values affect keyboard focus traversal:

- `grid-rows`: Focus moves horizontally across rows, then down to the next row.
- `grid-columns`: Focus moves vertically down columns, then to the next column.

> [!NOTE]
> Instead of applying `reading-flow: normal`, which has no effect, the property is omitted altogether when no focus management is needed.

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

### Main

- `radio-reading-flow.js`: Handles applying and removing the appropriate `reading-flow` class based on user selection.
- `radio-grid-variations.js`: Switches grid layout by adding the selected class and removing others. Also updates the recommended `reading-flow` for the chosen layout.

### Accessibility

- `aria-announcement.js`: Updates a live region dynamically to announce current grid layout and reading flow selections to assistive technologies, ensuring users are aware of the active keyboard navigation mode.
- `init.js`: Initializes the application on page load by attaching event listeners, setting initial states, and triggering the first live region announcement to inform screen reader users of default selections.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.
- `details-aria-expanded.js`: Ensures accessibility by dynamically updating the aria-expanded attribute on <details> elements.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

- Fully keyboard operable: focus each radio button group using <kbd>Tab</kbd>, then select individual radio buttons using arrow keys.
- Live region announcements via `aria-live="polite"` provide immediate feedback on grid and reading-flow selections to screen reader users.
- Use of `aria-describedby` on fieldsets to provide descriptive instructions about the control's purpose and effect on keyboard navigation.
- Clear visual focus indicators and logical tab order maintain usability for keyboard-only users.
- Semantic HTML structure with properly grouped radio buttons and labels supports assistive technology navigation.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome - Currently (30/05/2025) only works in Chrome v.137.
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
