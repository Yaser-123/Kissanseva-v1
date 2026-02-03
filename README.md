# KissanSeva 🌾

**A beginner-friendly React + Vite app for Indian farmers — crop advisory, market prices, government schemes and more.**

---

## 🚩 Problem Statement

Many farmers need easy access to timely agricultural information (crop advisory, pest control, market prices, government schemes, availability of seeds and tractors, etc.) but struggle with fragmented sources or apps that are hard to use on low-end devices.

## 💡 Solution

KissanSeva is a lightweight, responsive web app built with React + Vite + TypeScript and Tailwind CSS that brings several farmer-oriented services into one simple UI:

- Crop advisory and pest control tips
- Market price lookups
- Government schemes information
- Seed availability, organic products, tractor rent
- Local weather information and a simple market/e-market page

The app is structured as multiple pages with a small, maintainable codebase and aims to be easy to run and modify even for beginners.

---

## 🚀 Features

- Built with React 18, TypeScript and Vite (fast dev server)
- Routing with `react-router-dom`
- Mobile friendly styles using Tailwind CSS
- Simple UI components under `src/components` and pages under `src/pages`
- Uses `axios` for HTTP requests (if you later add APIs)

---

## 📁 Project structure (important files)

- `src/` - Application source
  - `pages/` - Each page (CropAdvisory, MarketPrices, Weather, etc.)
  - `components/` - Reusable components (Header, Footer, ImageUpload, LanguageSelector)
  - `contexts/LanguageContext.ts` - App-wide language selection
  - `App.tsx`, `main.tsx` - App entry points
- `index.html`, `vite.config.ts` - Vite configuration
- `package.json` - scripts and dependencies

---

## ✅ Prerequisites (for beginners)

- Node.js (LTS recommended; tested with Node 18+)
- npm (comes with Node.js) or you can use `pnpm`/`yarn` if preferred
- Git (optional, for cloning the repository)

> Tip: On Windows you can use PowerShell or Git Bash. If you're unsure about Node, install it from https://nodejs.org/.

---

## 💻 Quick start (step-by-step)

1. Clone the repo (or download as zip):

```bash
# using https
git clone https://github.com/Yaser-123/Kissanseva-v1.git
cd Kissanseva-v1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server (hot-reloads, fast):

```bash
npm run dev
```

4. Open your browser at:

```
http://localhost:5173
```

> If the port is different Vite will show the correct local URL in the console.

---

## 📦 Build & preview (production)

```bash
# build production files
npm run build

# preview the built app locally
npm run preview
```

This serves the built files so you can verify before deploying.

---

## ✅ Useful scripts (from `package.json`)

- `npm run dev` — start dev server
- `npm run build` — create production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint checks

---

## 🛠️ Common troubleshooting

- If dev server fails to start: ensure Node and npm are installed and up-to-date.
- If dependency installation fails: try `npm ci` or delete `node_modules` and `package-lock.json` and run `npm install` again.
- If you see TypeScript or lint errors, review the file path in the console and fix or ask for help.

---

## 🤝 Contributing

- Fork the repo, create a branch (`feature/xyz`), make changes, and open a Pull Request.
- Keep changes small and focused. Add tests or notes if you modify behavior.

---

## 📜 License

Add a `LICENSE` file with your preferred license (e.g., MIT) or specify terms here.

---

## 👋 Need help?

Open an issue in the repository or contact the maintainer.

---

*Happy hacking — make it accessible, simple and useful for farmers!* 🌱
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
