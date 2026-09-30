# React Product Manager

A React and Redux Toolkit exercise for managing products and user-related UI state.

## What this project demonstrates

Redux slices, store composition and React forms.

## Run locally

```bash
npm ci
npm start
```

Create React App normally serves the development app at `http://localhost:3000`.
`npm run build` produces a static build. The existing `npm test` script does not by itself establish application test coverage.

## Code guide

`src/Redux/reducer/productSlice.js` defines product state; `src/component/ProductManager.js` provides the management UI.

## Status

Learning project. Registration and user state in a frontend are not a server-side authentication system.

Dependencies are recorded in `package-lock.json`. The original framework generation is retained; no claim of a current production dependency audit is made.
