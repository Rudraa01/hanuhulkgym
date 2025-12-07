# HANU HULK GYM - Gym Website

A modern, responsive gym website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with neon green accent colors
- ⚡ Smooth animations with Framer Motion
- 📱 Fully responsive navigation bar
- 🎯 Active link indicators
- 💪 Professional gym branding

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Project Structure

```
hanuhulkgym/
├── src/
│   ├── components/
│   │   └── GymNavbar.tsx    # Main navigation component
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Colors

The primary neon green color can be customized in:
- [tailwind.config.js](tailwind.config.js) - Update the `neon-green` color
- [src/components/GymNavbar.tsx](src/components/GymNavbar.tsx) - Update inline color values

### Navigation Links

Edit the `navLinks` array in [src/components/GymNavbar.tsx](src/components/GymNavbar.tsx):

```typescript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  // Add or modify links here
];
```

## License

MIT
