# João Pedro - Portfolio Website

A modern and interactive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Featuring smooth animations, dark/light theme support, and a responsive design.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between dark and light modes with persistent preferences
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Active Section Tracking** - Navigation links highlight the current section
- **Fixed Header** - Sticky header with gradient on scroll
- **Colored Social Icons** - Platform-specific icon colors (GitHub, LinkedIn, WhatsApp, Email)
- **Mobile Friendly** - Optimized layout and navigation for mobile users

## 📱 Sections

- **Home** - Hero section with typewriter effect and CTA buttons
- **About** - Personal introduction with profile image and rotating border
- **Projects** - Filterable project showcase with type and technology filters
- **Skills** - Skill categories with progress bars (Mastered & Learning)
- **Contact** - Contact information cards with links to social profiles

## 🛠️ Technologies

- **React** 19.2.4 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.3.1 - Build tool
- **Tailwind CSS** 4.2.1 - Utility-first CSS framework
- **Framer Motion** 12.38.0 - Animation library
- **shadcn/ui** - Accessible component library
- **Lucide React** 1.8.0 - Icon library
- **React Icons** 5.6.0 - Additional icon sets

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd about-me
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build & Deployment

### Build for production:
```bash
pnpm build
```

### Preview production build:
```bash
pnpm preview
```

### Type checking:
```bash
pnpm typecheck
```

### Linting:
```bash
pnpm lint
```

### Code formatting:
```bash
pnpm format
```

## 📁 Project Structure

```
src/
├── components/
|   ├── assets/
│   ├── app/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── main.tsx
│   │   └── sections/
│   │       ├── hero-section.tsx
│   │       ├── about-me-section.tsx
│   │       ├── projects-section.tsx
│   │       ├── skills-sections.tsx
│   │       └── contact-section.tsx
│   ├── ui/
│   ├── button-up.tsx
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css` for light and dark modes:

```css
:root {
  --background: #FFFFFF;
  --primary: #3B82F6;
  --secondary: #22C55E;
  /* ... more variables */
}

.dark {
  --background: #0F172A;
  --primary: #3B82F6;
  --secondary: #22C55E;
  /* ... more variables */
}
```

### Animations

Reusable animation variants are defined in `src/lib/animations.ts`. Import and use them in Framer Motion components.

## 🔧 Development Tips

- Use `classname` utility from `clsx` for conditional styling
- Components follow shadcn/ui patterns for consistency
- TypeScript strict mode is enabled for better type safety
- ESLint and Prettier configured for code quality

## 📞 Contact

- **GitHub**: [joaopedro08-dev](https://github.com/joaopedro08-dev)
- **LinkedIn**: [João Pedro Dala Dea Mello](https://www.linkedin.com/in/jo%C3%A3o-pedro-dala-dea-mello-3266003a3/)
- **WhatsApp**: [+55 (14) 99681-5396](https://wa.me/5514996815396)
- **Email**: [joao.p.mello.dev@gmail.com](mailto:joao.p.mello.dev@gmail.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Developed with dedication by **João Pedro Dala Dea Mello**

---

**© 2026 João Pedro. All rights reserved.**
