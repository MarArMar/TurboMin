# Turborepo-Sveltekit-Typia example with ESLint

#### Setup

```sh
pnpm add turbo --global
pnpm install
```

#### Bug

Most ESLints lints work,

But some do not in Svelte Projects & Files : 

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

In apps\SvelteKitExample\src\routes\+page.svelte :
```ts
import { sveltekit } from "@sveltejs/kit/vite";
let shouldBeAConst = "Lint test";
// TS correctly detects it is not used
// But eslint does not lint it as should be a const
```
