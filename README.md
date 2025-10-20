# Financial Calculator Hub

![App Preview](https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=300&fit=crop&auto=format)

A modern React component showcase featuring 5 professionally designed financial calculator layouts with smooth animations and responsive design.

## Features

- 🎨 **5 Unique Professional Designs** - Multiple layout variations to choose from
- ✨ **Smooth Animations** - Framer Motion powered micro-interactions
- 📱 **Fully Responsive** - Perfect layouts for mobile, tablet, and desktop
- 🎯 **Modern UI Components** - Glassmorphism, gradients, 3D effects
- 💼 **Professional Aesthetics** - Optimized for financial services
- ⚡ **Interactive Elements** - Engaging hover states and transitions

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f604f190633b10bf459efb&clone_repository=68f60b2990633b10bf459f12)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> "there is all mf calc page in this site, create a react component using react+tailwind for same heading and same 6 buttons but different layout, design, just one page code, make 3-5 designs, keep them in one file separated in sections, i will select which ever i like, you can use images, animations, motion to make sure page is modern, professional, fresh and not routine."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **Vite** - Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Basic knowledge of React and Tailwind CSS

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
financial-calculator-hub/
├── src/
│   ├── App.tsx              # Main application with all 5 designs
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Design Variations

### Design 1: Gradient Glassmorphism
- Floating gradient cards with blur effects
- Smooth scale animations on hover
- Modern purple/blue color scheme

### Design 2: Minimalist Grid
- Clean card-based layout
- Subtle icon badges
- Professional gray palette with blue accents

### Design 3: Bold Modern 3D
- Cards with depth and shadows
- Dynamic hover transformations
- Vibrant gradient backgrounds

### Design 4: Corporate Professional
- Structured grid layout
- Clean typography and spacing
- Traditional blue color scheme

### Design 5: Contemporary Gradient Mesh
- Animated gradient backgrounds
- Premium glass effects
- Modern color combinations

## Customization

Each design is self-contained in its own section within `App.tsx`. You can:

- Modify colors in the component styles
- Adjust animations in the Framer Motion props
- Change calculator types and icons
- Customize spacing and layout

## Deployment Options

### Vercel (Recommended)
```bash
bun install -g vercel
vercel
```

### Netlify
```bash
bun run build
# Upload the dist folder to Netlify
```

### Static Hosting
```bash
bun run build
# Upload the dist folder to any static host
```

<!-- README_END -->