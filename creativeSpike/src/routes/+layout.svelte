<script>
  import Header from "../lib/header.svelte";

  import WerkvormCard from "../lib/WerkvormCard.svelte";
</script>

<Header />
<slot />

<style>
  :global(body) {
    height: 200vh;
    margin: 0;
    padding: 0;
    background-color: #351eb6;
  }
</style>
