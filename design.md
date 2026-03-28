# Design System Document: The Monolithic Modularist

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Blueprint"**

This design system rejects the "web-template" aesthetic in favor of a high-end, editorial approach to developer portfolios. It treats the browser window as a physical drafting table. By combining the precision of a technical blueprint with the bold weights of Swiss International Style, we create a look that is both hyper-professional and intensely characterful.

We break the "standard" layout by utilizing **intentional modularity**. Instead of fluid, drifting sections, we use rigid, structured "cells" that feel like a physical grid of information. The experience should feel less like a scrollable website and more like a high-end, tactile dossier of a developer's career.

---

## 2. Colors
Our palette is strictly monochromatic, relying on tonal depth and high-contrast logic to drive the user's eye.

- **Primary & Neutral Roles:** `primary` (#000000) is reserved for the highest-order information (headings, primary CTAs), while `surface` (#f9f9f9) provides a crisp, paper-like canvas.
- **The "No-Line" Rule:** To differentiate ourselves from "Bootstrap-style" grids, we prohibit the use of standard 1px solid borders for sectioning. Boundaries are defined through **Background Shift Logic**.
- *Example:* A project description in `surface-container-low` (#f3f3f3) sits directly against a main content area in `surface` (#f9f9f9).
- **Surface Hierarchy & Nesting:** Treat the UI as nested tectonic plates.
- Base: `surface` (#f9f9f9)
- Sections: `surface-container-low` (#f3f3f3)
- Interactive Cards: `surface-container-highest` (#e2e2e2)
- **Signature Textures:** For high-impact areas (Hero sections), use a subtle radial gradient transitioning from `primary` (#000000) to `primary_container` (#3b3b3b) to provide a "deep space" feel that adds weight to the introduction.

---

## 3. Typography
The typography is the soul of this system. We pair the technical precision of **Space Grotesk** with the humanist clarity of **Inter**.

- **Display & Headlines (Space Grotesk):** These should feel monolithic. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero titles. The monospaced-leaning terminals of Space Grotesk communicate "Developer" without the cliché of green-on-black code.
- **Titles & Body (Inter):** Use Inter for all functional reading. Its high x-height ensures readability at `body-md` (0.875rem) even in low-contrast scenarios.
- **Labeling:** Use `label-md` in all-caps with increased letter-spacing (0.05em) for category tags or metadata (e.g., "TECH STACK," "YEAR").

---

## 4. Elevation & Depth
In a monochromatic system, elevation is conveyed through **Tonal Layering**, not traditional drop shadows.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` (#ffffff) card placed on a `surface-container-high` (#e8e8e8) background creates a natural visual "pop" without a single line of CSS shadow.
- **Ambient Shadows:** Shadows are a last resort. If a floating element (like a modal) is required, use a high-diffusion shadow: `0 20px 40px rgba(0,0,0,0.06)`. The shadow must feel like soft light hitting paper.
- **The "Ghost Border" Fallback:** For buttons or inputs, use a "Ghost Border": the `outline-variant` (#c6c6c6) at 20% opacity. It provides a tactile edge without cluttering the modular grid.
- **Glassmorphism:** For the navigation bar, use `surface` (#f9f9f9) at 80% opacity with a `backdrop-blur` of 12px. This maintains the "Digital Blueprint" feel while allowing content to bleed through as the user scrolls.

---

## 5. Components

### Buttons
- **Primary:** Background: `primary` (#000000), Text: `on_primary` (#e2e2e2). Square edges (`0px` radius).
- **Secondary:** Background: `transparent`, Border: 1px `outline` (#777777), Text: `primary` (#000000).
- **Interactions:** On hover, the primary button should shift to `primary_fixed` (#5e5e5e) with a swift 150ms transition.

### Cards (The "Module")
- **Structure:** Cards must not have borders. Use `surface-container-highest` (#e2e2e2) for the card background.
- **Spacing:** Use `spacing-8` (1.75rem) for internal padding to give content significant "breathing room."

### Input Fields
- **Styling:** Underline-only style using `outline` (#777777). Focus state shifts the underline to `primary` (#000000) and 2px thickness.
- **Error:** Use `error` (#ba1a1a) for helper text and `error_container` (#ffdad6) for the background fill of the input field.

### List Items
- **Rule:** Forbid divider lines.
- **Modular Separation:** Use `spacing-4` (0.9rem) between items. Use a subtle background shift to `surface-container-low` (#f3f3f3) on hover to indicate interactivity.

### Terminal Component (Unique Portfolio Element)
- A dedicated module for code snippets using `primary_container` (#3b3b3b) background and `on_primary_container` (#ffffff) text. Use `0px` border radius to maintain the architectural look.

---

## 6. Do's and Don'ts

### Do
- **Do** use aggressive white space. If a section feels crowded, jump from `spacing-12` to `spacing-20`.
- **Do** align everything to a strict 12-column grid. Even "asymmetric" elements should start and end on grid lines.
- **Do** use monochromatic imagery (grayscale photos/icons) to maintain the "Blueprint" aesthetic.

### Don't
- **Don't** use border-radius. Every element must have a `0px` radius to reinforce the structural, modular feel.
- **Don't** use traditional "Blue" for links. Use a `primary` (#000000) underline that disappears on hover.
- **Don't** use pure `#000000` for body text. Use `on_surface` (#1b1b1b) for long-form reading to reduce eye strain, reserving pure black for headings.