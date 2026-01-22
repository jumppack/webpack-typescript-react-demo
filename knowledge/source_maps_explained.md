# Understanding Source Maps (`.map` files)

You noticed the `mappings` key in the `.map` file containing "strange values" like `AAAA,IAAIA,GAAG...`. This file is a **Source Map**.

## What is it?
A Source Map provides a way for browsers to map the code they are running (the bundled, minified JS) back to the code you wrote (TypeScript, React).

Without it, if you had an error in your app, the browser would say:
> "Error at line 1, column 4502 of bundle.js"

With it, the browser says:
> "Error at line 15 of App.tsx"

## The "Mappings" Key Explained

The "strange values" you see are **Base64 Variable Length Quantities (VLQ)**.

It is a string encoding that is extremely compressed to keep the file size small. It is NOT human-readable text. It is a sequence of numbers encoded as characters.

### How to decode it (Conceptually)
The string is a series of segments separated by commas and semicolons.
- **Semicolons (`;`)**: Correspond to lines in the **generated** (bundled) file.
- **Commas (`,`)**: Correspond to segments within that line.

Each segment (e.g., `AAAA`) typically represents 5 integers:
1.  **Column** in the generated file.
2.  **File Index**: Which source file this comes from (e.g., `App.tsx` vs `index.tsx`).
3.  **Line Number** in the original source file.
4.  **Column Number** in the original source file.
5.  **Name Index**: Variable name (if it was renamed during minification).

### Example
If you see `AAAA`, it might translate to:
> "This code starts at column 0 of the generated file, maps to file #0 (App.tsx), line 0, column 0."

The values are **relative**. The second segment defines its position *relative to the first*. This "delta encoding" saves a massive amount of space.

## Summary
You don't need to read these values manually. The browser's DevTools parse this automatically to show you your original source code while debugging, even though it's actually running the bundle.
