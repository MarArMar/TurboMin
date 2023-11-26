<script lang="ts">
  import { superTest } from "$lib/import";
  import { onMount } from "svelte";

  onMount(() => {
    console.log(superTest);
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
