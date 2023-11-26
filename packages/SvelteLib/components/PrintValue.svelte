<script lang="ts">
  // To test imports
  import "./value.css";
  import { messageLoaded } from "common/log"; // Path recognized
  
  let shouldBeAConst = "Lint test"; // Not linted by ESlint
  
  let value: string = "valuuuuue";
</script>

<h4>
  PrintValue.svelte value: '{value}'
</h4>

<br />
<br />
From PrintValue.svelte: {messageLoaded}
<br />
<br />
