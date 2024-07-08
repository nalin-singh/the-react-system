# The React System : Vite

> This is a starter template for a React application with TypeScript and Vite built for Applications that require a lot of data manipulation and visualization, feel free to fork and customize and remove the unnecessary packages that are not required for your use-case.

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/nalin-singh/the-react-system.git
   ```

2. Download `pnpm` package manager from <https://pnpm.io/installation>

3. Install dependencies

   ```bash
   pnpm install
   ```

4. Remove `.git` folder from the root directory

   ```bash
   cd the-react-system
   rm -rf .git
   ```

5. Initialize the project, and save the changes

   ```bash
   git init
   git add .
   git commit -m "Initiate : React Vite Template"
   ```

6. Run the application

   ```bash
   pnpm dev
   ```

## Pre-Configured using industry-standard technologies

### Core

- [Vite](https://vitejs.dev/) : Vite is a next-generation frontend tool that is fast, lightweight, and supports all major frameworks. It uses the `Typescript + SWC` configuration
- [Vitest](https://vitest.dev/) : Vitest is a Vite-native testing framework designed for speed and efficiency.
- [PNPM](https://pnpm.io/) : PNPM is a fast, disk space efficient package manager, improved upon the `npm` CLI by focusing on fast performance and efficiency.
  | Metric | NPM | YARN | PNPM |
  | ------------------------------ | ------ | ------ | ----- |
  | Installation time (cold cache) | 67.4s | 47.6s | 32.3s |
  | Installation time (warm cache) | 9.1s | 4.9s | 4.4s |
  | Disk space used | 237 MB | 175 MB | 39 MB |

### State Management

- [Redux Toolkit](https://redux-toolkit.js.org/) : Redux Toolkit simplifies Redux state management with utilities like Redux Thunk and Redux Logger Middleware.

### Schema Validation and Forms

- [Zod](https://zod.dev/) : Zod is a TypeScript-first schema validation library with static type inference.
- [React-Hook-Form](https://react-hook-form.com/) : React Hook Form is used for building performant forms in React and integrates seamlessly with Zod Schema Resolvers for validation.

### Data Visualization

- [TanStack ReactTable](https://tanstack.com/table/v8) : TanStack React Table is a headless UI library for building excel like experiences for your data.
- [Recharts](https://recharts.org/) : Recharts is a composable charting library built on React components.

### Design System and Styling

- [Shadcn UI](https://shadcn.com/docs/ui) : Shadcn UI is a collection of accessible components for React.js, Vue.js, and Svelte.
  It's built on top of [Radix Primitives](https://www.radix-ui.com/primitives) and Tailwind CSS.
  The way the Shadcn CLI (`pnpm dlx shadcn-ui@latest add <component-name>`) installs the components is governed by the `components.json` file.
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) : Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [Lucide Icons](https://lucide.dev/) : Lucide is a set of icons designed by the community to be open source and accessible.

### Code Quality & Maintenance

- [ESLint](https://eslint.org/) : ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Prettier](https://prettier.io/) : Prettier is an opinionated code formatter.
- [Husky](https://typicode.github.io/husky/) : Husky is a Git hooks manager, the current folder comes wiht a pre-commit hook that runs ESLint and Prettier on the staged files.

### Utilities

- [SheetJS : XLSX](https://docs.sheetjs.com/docs/getting-started/installation/frameworks) : SheetJS is a JavaScript library for reading and writing spreadsheet files. The installation is a .tgz file, currently setup in the vendor folder and referenced in the package.json file via `"xlsx": "file:vendor/xlsx-0.20.2.tgz"`.

## Soon to be added

- OIDC Provider : Authentication
- Environment Variables Management : Configuration
