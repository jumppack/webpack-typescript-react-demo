# Understanding TypeScript

## What is TypeScript?
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is a strict superset of JavaScript, which means any valid JavaScript code is also valid TypeScript code. TypeScript adds static typing to the language.

## Key Concepts

### 1. Static Typing
In JavaScript, types are dynamic (a variable can hold a number, then a string). In TypeScript, you can define types for variables, function parameters, and return values. This catches errors at **compile time** (while you write code) rather than **runtime** (when the user runs the app).

```typescript
// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
```

### 2. Type Inference
TypeScript is smart enough to infer types in many cases.
```typescript
let name = "Alice"; // TypeScript knows 'name' is a string
// name = 42; // Error: Type 'number' is not assignable to type 'string'.
```

### 3. Interfaces and Types
You can define the shape of objects.
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "Bob"
};
```

### 4. Generics
Generics allow you to create reusable components that work with a variety of types rather than a single one.
```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
```

### 5. TSX (TypeScript + JSX)
When using React with TypeScript, files use the `.tsx` extension. TypeScript understands JSX syntax and can type-check definitions of React components (props, state).

Example Component:
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

## Compilation
Browsers cannot execute TypeScript directly. It must be **transpiled** (compiled) into JavaScript. This is handled by the TypeScript Compiler (`tsc`) or handled via a bundler like Webpack using `ts-loader` or `babel-loader`.

`tsconfig.json` is the configuration file that tells the compiler how to transform the code (e.g., which JS version to output, how strict the type checking should be).
