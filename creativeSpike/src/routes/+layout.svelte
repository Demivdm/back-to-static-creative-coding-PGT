<script>
  import Header from "../lib/header.svelte";

  import WerkvormCard from "../lib/WerkvormCard.svelte";
</script>

<Header />
<slot />
<WerkvormCard />
<h2>hier komt de rest van de website</h2>

<style>
  :global(body) {
    height: 200vh;
  }
</style>
