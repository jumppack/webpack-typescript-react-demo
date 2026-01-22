const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. ENTRY POINT:
  // This is where Webpack starts execution. It reads this file to find imports.
  // It's the root of your dependency tree.
  entry: './src/index.tsx',

  // 2. OUTPUT:
  // This tells Webpack where to write the bundled files.
  // We use the 'path' module to ensure cross-platform compatibility (Mac vs Windows paths).
  output: {
    path: path.join(__dirname, '/dist'), // The folder where 'bundle.js' is saved
    filename: 'bundle.js' // The name of the final bundled file
  },

  // 3. RESOLVE:
  // This helps Webpack find files when you import them without extensions.
  // e.g. import App from './App' -> Webpack looks for App.tsx, then App.ts, then App.js.
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  // 4. MODULE RULES (Loaders):
  // Webpack only understands JS/JSON. Loaders teach it how to handle other files.
  module: {
    rules: [
      {
        // Rule for TypeScript files (.ts and .tsx)
        test: /\.tsx?$/, 
        // Use 'ts-loader' to compile TS -> JS.
        // It uses your 'tsconfig.json' file for compilation settings.
        use: 'ts-loader', 
        exclude: /node_modules/ // Don't compile node_modules, they are already JS
      },
      {
        // Rule for CSS files
        test: /\.css$/,
        // Chain loaders (executed right-to-left):
        // 1. css-loader: Reads the CSS file content
        // 2. style-loader: Takes that content and injects it into the DOM via <style> tags
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // 5. PLUGINS:
  // Plugins do additional work after the bundle is created.
  plugins: [
    // This plugin takes your 'public/index.html' and injects the <script src="bundle.js"> tag automatically.
    // It then moves the final index.html to the dist/ folder.
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  // 6. DEV SERVER:
  // Settings for 'npm run start'.
  devServer: {
    historyApiFallback: true, // Needed for React Router (Single Page Apps)
    port: 3000, 
    open: {
      app: {
        name: 'google chrome'
      }
    } // Automatically opens Google Chrome
  }
};
