<script lang="ts">
  // http://localhost:5173
  import { onMount } from "svelte";
  import {
    loadedTypia,
    exampleMember,
    exampleNotMember,
    validateMember,
  } from "$src/routes/local-typia";
  import { log, messageLoaded } from "common/log";
  import { messageLoadedLocal } from "./local-ts";
  import PrintValue from "SvelteLib/components/PrintValue.svelte";

  onMount(() => {
    log("Page mounted");

    validateMember(exampleMember);
    validateMember(exampleNotMember);
  });
</script>

<h1>Page</h1>
<p>Check console for typia validations</p>
<br />
{messageLoadedLocal}
<br />
{messageLoaded}
<br />
{loadedTypia}
<br />
<PrintValue />
