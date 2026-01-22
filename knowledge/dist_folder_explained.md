# Understanding the `dist` Folder

## 1. What are these files?

The `dist` (distribution) folder contains the **only** files that are actually needed to run your application in a browser. Everything in `src/` (TypeScript, React, splitting CSS) is just for *your* development convenience. The browser doesn't understand those.

### Files present in your `dist/` folder:

*   **`bundle.js`**: This is the "Big Mac".
    *   **What is it?** It contains *all* your JavaScript code (`index.tsx`, `App.tsx`) PLUS *all* the library code you used (`react`, `react-dom`) merged into one single file.
    *   **Why?** Browsers traditionally loaded one script faster than 100 small ones. Webpack puts everything here.
*   **`index.html`**: The entry point.
    *   **What is it?** A copy of your `public/index.html` but with one crucial difference: Webpack has automatically added `<script defer src="bundle.js"></script>` to it.
*   **`bundle.js.LICENSE.txt`**:
    *   **What is it?** Webpack extracts license comments from third-party libraries (like React) and saves them here to ensure you comply with open-source licenses.
*   **`App.js`, `index.js`, `*.map`** (Optional/Artifacts):
    *   You might see these if `tsc` (TypeScript Compiler) ran independently or if your Webpack config is set to emit intermediate files. In a pure Webpack setup, usually only `bundle.js` matters. The `.map` files are "Source Maps" which help you debug; they tell the browser "Error on line 1 of bundle.js actually corresponds to line 15 of App.tsx".

## 2. Who created them?

*   **Webpack** created `bundle.js`, `index.html`, and `bundle.js.LICENSE.txt`.
    *   It did this when you ran `npm run build`.
    *   It read your `webpack.config.js` to know *how* to create them.

## 3. Step-by-Step: What happens when you run the app?

When you run `npm start` (Development) or deploy the `dist` folder (Production), here is the sequence of events:

1.  **Request**: You type `localhost:3000` in your browser.
2.  **Server**: The server (Webpack Dev Server or Nginx/Apache) looks for an `index.html` and sends it to your browser.
3.  **Parsing HTML**: The browser reads `index.html`. It sees an empty `div` (`<div id="root"></div>`) and then sees the script tag pointing to `bundle.js`.
4.  **Loading Script**: The browser downloads `bundle.js`.
5.  **Execution**: The browser executes the JavaScript in `bundle.js`.
    *   The "runtime" code of Webpack starts.
    *   It executes the React library code.
    *   It executes your `src/index.tsx` logic: `createRoot(document.getElementById('root')).render(<App />)`.
6.  **Mounting**: React takes control of that empty `<div id="root">` and injects your component (the text "Webpack + TypeScript + React").
7.  **Interactive**: The app is now running and ready for user interaction.
