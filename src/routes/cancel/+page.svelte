<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="card-wrap">
  <Card.Root>
    <Card.Content>
      <div class="content">
        <h2>Payment cancelled</h2>
        <p>No charge was made. Return to the store to try again.</p>
        <a href="/"><Button>Back to store</Button></a>
      </div>
    </Card.Content>
  </Card.Root>
</div>

<style>
  .card-wrap {
    max-width: 480px;
    margin: 4rem auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.6rem;
    color: #2c1810;
    margin: 0;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 0;
  }
</style>
