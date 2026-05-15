# Legacy Revival Center — Netlify Deployment

This repository contains a Vite + React client and an Express-based server. It is configured to build and deploy to Netlify.

Quick deploy steps (Netlify):

- Set the repository in Netlify and ensure build environment installs devDependencies.
- Netlify build command: `npm run build`
- Publish directory: `dist/public`
- Functions directory: `netlify/functions`

Local build:

```bash
cd Legacy-Revival-Center
npm install
npm run build
# built client -> dist/public and server -> dist/index.cjs
```

Notes:
- `netlify.toml` includes the build settings and a redirect for `/api/*` to the Netlify function `api`.
- The `script/build.ts` runs `vite build` for the client and bundles the server with `esbuild`.
