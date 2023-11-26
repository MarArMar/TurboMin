<script lang="ts">
  // http://localhost:5173
  import { log, messageLoaded } from "common/log";
  import { messageLoadedLocal } from "./local-ts";
  import PrintValue from "SvelteLib/components/PrintValue.svelte";
</script>

<h1>Page</h1>
<br />
{messageLoadedLocal}
<br />
{messageLoaded}
<br />
<PrintValue />
