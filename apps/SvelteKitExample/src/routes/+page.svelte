<script lang="ts">
  // http://localhost:5173
  import { log, messageLoaded } from "common/log";
  import { messageLoadedLocal } from "./local-ts";

  let shouldBeAConst = "Lint test";
  // TS correctly detects it is not used
  // But eslint does not lint it

  import PrintValue from "SvelteLib/components/PrintValue.svelte";
</script>

<h1>Page</h1>
<br />
{messageLoadedLocal}
<br />
{messageLoaded}
<br />
<PrintValue />
