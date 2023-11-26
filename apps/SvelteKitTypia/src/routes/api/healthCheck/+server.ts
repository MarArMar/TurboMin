// http://localhost:5173/api/healthCheck
import type { RequestHandler } from "@sveltejs/kit";

import { messageLoadedLocal } from "$src/routes/local-ts";
// Correctly Resolved by TS,
// Is resolved on dev server and during build
// BUT NOT resolved by ESLint : Unable to resolve path to module '$src/routes/local-ts'.eslintimport/no-unresolved


// import { messageLoadedLocal } from "$src/notexistingpath/local-ts";
// Correctly not resolved by TS (and ESLint) : Cannot find module '$src/notexistingpath/local-ts' or its corresponding type declarations.ts(2307)

export const GET: RequestHandler = async () => {
  return new Response(
    JSON.stringify({ message: "alive", messageLoadedLocal }),
    {
      status: 200,
    }
  );
};
