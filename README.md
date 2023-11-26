# Turborepo-Sveltekit example with ESLint

#### Setup

```sh
pnpm add turbo --global
pnpm install
```

#### Bug

Most ESLints lints work,

But some do not in SvelteKit .svelte & .ts files :

In apps\SvelteKitExample\src\routes\+page.svelte :
```html
<script lang="ts">
Parsing error: '>' expected.eslint
```

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

const shouldBeAConst = "Lint test"; // Lint working
```

In apps\SvelteKitExample\src\routes\+page.svelte at some point before :
```ts
import { sveltekit } from "@sveltejs/kit/vite";
let shouldBeAConst = "Lint test";
// TS correctly detects it is not used
// But eslint does not lint it as should be a const
```

Attempts to solve : 
- Installed https://github.com/sveltejs/eslint-plugin-svelte
- Applied https://cnrdev.medium.com/enable-eslint-for-sveltekit-in-vscode-d9fbb39e117f