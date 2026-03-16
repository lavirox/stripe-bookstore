<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import dots from "$lib/assets/light-grey-dots.avif";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="page-bg" style="--dots: url({dots})">
  <main>
    <header>
      <h1>The Book Store</h1>
    </header>
    {@render children()}
  </main>
</div>

<style>
  .page-bg {
    min-height: 100vh;
    position: relative;
  }

  .page-bg::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: var(--dots);
    background-repeat: repeat;
    opacity: 0.3;
    z-index: -1;
  }

  main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    font-family: "PT Serif", Times, serif;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    font-weight: bold;
  }

  h1 {
    font-size: 2.5rem;
    color: #2c1810;
    margin: 0;
  }
</style>
