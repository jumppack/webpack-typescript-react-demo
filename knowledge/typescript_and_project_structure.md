# Minimum Structure for a TypeScript Project

To simply "run TypeScript code", you don't need Webpack or React. The absolute bare minimum is:

## The "Bare Bones" Setup

1.  **`package.json`**: To manage the typescript dependency.
2.  **`tsconfig.json`**: To tell TypeScript how to compile.
3.  **`src/index.ts`**: Your actual code files.

### Steps to Create Just This:
1.  `npm init -y` (Creates package.json)
2.  `npm install typescript --save-dev` (Installs the compiler)
3.  `npx tsc --init` (Creates a default tsconfig.json)
4.  Write code in `index.ts`.
5.  Run `npx tsc` (Compiles `.ts` -> `.js`).
6.  Run `node index.js` (Executes the result).

---

# Real-World Project Structure

While the example we built is standard, real-world enterprise projects are more organized. They rarely dump everything into `src/`.

## Common Architecture Patterns

### 1. Feature-Based (Scalable)
Group files by "feature" rather than "type".
```
src/
  features/
    auth/
      AuthLogin.tsx
      authAPI.ts
      authSlice.ts
    dashboard/
      DashboardLayout.tsx
      Widgets.tsx
  components/  (Shared generic UI)
    Button.tsx
    Modal.tsx
  hooks/       (Shared logic)
  utils/       (Helpers)
```

### 2. Type-Based (Classic)
Grouping by file type. Easier for smaller apps.
```
src/
  components/
  pages/
  services/    (API calls)
  types/       (TypeScript interfaces)
  utils/
```

## What else do real projects have?
-   **Linting & Formatting**: `.eslintrc`, `.prettierrc` (Enforces code style automatically).
-   **Testing**: `jest.config.js` or `vitest.config.ts`, plus `__tests__` folders.
-   **Environment Variables**: `.env` files (to store API keys safely).
-   **CI/CD Config**: `.github/workflows` (Actions) to automatically build and test when you push code.
