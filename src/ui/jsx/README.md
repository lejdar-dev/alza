# UI Component Structure

This directory is organized according to the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology:

---

## 🧬 Atoms

- The most basic UI components
- Cannot be broken down any further.
- Usually static

- **Testing Focus:** Visual appearance, isolated behavior.

---

## 🧪 Molecules

- Atoms put together to make basic UI parts.
- Show how atoms interact and work together.
- May use client React APIs (hooks etc.)

- **Testing Focus:** Interactions and cooperation between atoms.

---

## 🌱 Organisms

- Components that manage and provide data to molecules.
- Responsible for data integration and loading / error states.

- **Testing Focus:** API integration, connected behavior.

---

## 🏗️ Layouts

- Compose and arrange organisms into page-level structures.
- Manage global composition and navigation.

- **Testing Focus:** Layout consistency, slot rendering
