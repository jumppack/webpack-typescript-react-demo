# Understanding Webpack

## What is Webpack?
Webpack is a static module bundler for modern JavaScript applications. When Webpack processes your application, it builds a dependency graph that maps every module your project needs and generates one or more bundles.

## Core Concepts

### 1. Entry
The entry point indicates which module Webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
**Default:** `./src/index.js`
**Our Project:** `./src/index.tsx`

### 2. Output
The output property tells Webpack where to emit the bundles it creates and how to name these files.
**Default:** `./dist/main.js`
**Our Project:** `./dist/bundle.js`

### 3. Loaders
Webpack only understands JavaScript and JSON files out of the box. **Loaders** allow Webpack to process other types of files (like CSS, images, TypeScript) and convert them into valid modules that can be consumed by your application and added to the dependency graph.

**Key Loaders used in this project:**
- `ts-loader`: Transpiles TypeScript files (`.ts`, `.tsx`) to JavaScript. Uses `tsconfig.json`.
- `style-loader`: Injects CSS into the DOM.
- `css-loader`: Interprets `@import` and `url()` like `import/require()` and will resolve them.

### 4. Plugins
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management, and injection of environment variables.

**Key Plugins used in this project:**
- `HtmlWebpackPlugin`: Simplifies creation of HTML files to serve your webpack bundles. It generates an HTML file (based on our template) and automatically injects the script tag for our bundle.

### 5. Mode
By setting the `mode` parameter to either `development`, `production`, or `none`, you can enable webpack's built-in optimizations that correspond to each environment.
- `development`: Optimizes for build speed and debugging (better source maps).
- `production`: Optimizes for execution speed and bundle size (minification, tree shaking).

## The Build Process
1. Webpack reads the `entry` file.
2. It parses the code and looks for `import` or `require` statements.
3. If it encounters a file type configured in `module.rules`, it passes that file through the specified **Loaders**.
4. It recursively does this for all dependencies.
5. It bundles the result into the `output` file.
6. **Plugins** run at specific stages of the build lifecycle to perform extra tasks (like file generation).

## Webpack Dev Server
`webpack-dev-server` provides a simple web server and the ability to use live reloading. It creates a bundle in memory (not written to disk) and serves it to the browser. When you change a file, it detects the change, recompiles, and refreshes the page (or Hot Module Replaces if configured).
