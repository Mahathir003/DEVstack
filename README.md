# DEVstack

DEVstack is a clean, interactive React web application that allows developers to browse software development tools, inspect key specs, and construct their personalized tech stack in real time.

## Technologies Used

- **React** (Vite)
- **Tailwind CSS**
- **DaisyUI**
- **React Toastify**
- **JavaScript (ES6+)**

## Key Features

- **Interactive Stack Management**: Easily add technologies to your stack and remove individual items or clear the whole selection with a single click.
- **Real-time Notifications**: Features custom toast alerts to inform users when items are added, removed, or if duplicate selections are attempted.
- **Dynamic Data Rendering**: Fetches tech cards dynamically from a local JSON endpoint, featuring badge tags, ratings, difficulty levels, and custom icons.

---

## React Questions & Answers

### i. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension that lets us write HTML-like elements directly inside JavaScript code, making UI component structures clear and intuitive to build.

### ii. What is the difference between props and state?

- **Props**: Read-only data passed down from a parent component to a child component.
- **State**: Local data managed internally within a component that can change over time and trigger UI re-renders.

### iii. What does the `useState` hook do, and where did you use it in this project?

`useState` enables functional components to store and update internal state. In `App.jsx`, it manages the fetched `technologies` list and tracks items added to the `stack` array.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects like data fetching. It was used with an empty dependency array (`[]`) to fetch technology data from `/technologies.json` once when the application first mounts.

### v. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which items have changed, been added, or removed. This optimizes DOM updates and ensures list rendering stays fast and glitch-free.

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering displays specific UI elements based on logical conditions. In `StackSidebar.jsx`, it checks if `stack.length === 0` to render the "No technologies added yet." message, or displays the active stack list when items exist.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent to Child**: Data is passed down as **props** (e.g., `<TechCard tech={tech} />`).
- **Child to Parent**: The parent passes a **callback function** as a prop, which the child calls with arguments when triggered by an event (e.g., `onAddToStack(tech)`).
