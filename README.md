# The React System : Vite

> This is a starter template for a React application with TypeScript and Vite.

## Built using industry-standard technologies

### Core

- [Vite](https://vitejs.dev/) : Vite is a next-generation frontend tool that is fast, lightweight, and supports all major frameworks.
- [Vitest](https://vitest.dev/) : Vitest is a Vite-native testing framework designed for speed and efficiency.
- [PNPM](https://pnpm.io/) : PNPM is a fast, disk space efficient package manager, improved upon the `npm` CLI by focusing on fast performance and efficiency.

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
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) : Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

### Code Quality & Maintenance

- [ESLint](https://eslint.org/) : ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Prettier](https://prettier.io/) : Prettier is an opinionated code formatter.
- [Husky](https://typicode.github.io/husky/) : Husky is a Git hooks manager, the current folder comes wiht a pre-commit hook that runs ESLint and Prettier on the staged files.

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

5. Run the application

   ```bash
   pnpm dev
   ```
