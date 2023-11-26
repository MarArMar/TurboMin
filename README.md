# Turborepo-Sveltekit example with ESLint

#### Setup

```sh
pnpm add turbo --global
pnpm install
```

Most ESLints lints work,

But some do not in SvelteKit .svelte & .ts files

#### Bug 2 : with .ts files

In apps\SvelteKitExample\vite.config.ts :

```ts
import { sveltekit } from "@sveltejs/kit/vite";
// Correctly Resolved by TS,
// Is resolved on dev server and during build
// BUT NOT resolved by ESLint : Unable to resolve path to module '@sveltejs/kit/vite'.eslintimport/no-unresolved
```

In apps\SvelteKitTypia\src\routes\api\healthCheck\+server.ts :

```ts
import { messageLoadedLocal } from "$src/routes/local-ts";
// Correctly Resolved by TS,
// Is resolved on dev server and during build
// BUT NOT resolved by ESLint : Unable to resolve path to module '$src/routes/local-ts'.eslintimport/no-unresolved

let shouldBeAConst = "Lint test"; // Lint working
```

Attempts to solve :

- Installed https://github.com/sveltejs/eslint-plugin-svelte
- Applied https://cnrdev.medium.com/enable-eslint-for-sveltekit-in-vscode-d9fbb39e117f
- Applied https://github.com/eslint/eslint/discussions/14667
- And https://www.npmjs.com/package/eslint-import-resolver-alias

Repos : 
- https://github.com/import-js/eslint-import-resolver-typescript
- https://github.com/import-js/eslint-plugin-import
- https://github.com/johvin/eslint-import-resolver-alias => Deprecated
- https://github.com/laysent/eslint-import-resolver-custom-alias

Questions / Issues raised :

- https://github.com/sveltejs/eslint-plugin-svelte/issues/631
- https://github.com/vercel/turbo/discussions/6584

#### [Solved] Bug : with .svelte files

In apps\SvelteKitExample\src\routes\+page.svelte :

```html
<script lang="ts">
Parsing error: '>' expected.eslint
```

Previously in apps\SvelteKitExample\src\routes\+page.svelte at some point before I got:

```ts
import { sveltekit } from "@sveltejs/kit/vite";
let shouldBeAConst = "Lint test";
// TS correctly detects it is not used
// But eslint does not lint it as should be a const
```

Could not reproduce it
