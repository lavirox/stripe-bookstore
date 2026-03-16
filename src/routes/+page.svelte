<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Accordion from "$lib/components/ui/accordion/index.js";

  let quantity = $state(1);

  const price = 50;

  let total = $derived(quantity * price);

  function increment() {
    quantity += 1;
  }

  function decrement() {
    if (quantity > 1) quantity -= 1;
  }
</script>

<div class="book-card">
  <Carousel.Root class="w-full max-w-xs self-start">
    <Carousel.Content>
      {#each Array(5), i}
        <Carousel.Item class="md:basis-1/1">
          <div class="p-1">
            <Card.Root>
              <Card.Content
                class="flex h-96 items-center justify-center p-6"
              >
                <span class="text-4xl font-semibold">{i + 1}</span>
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>

  <div class="book-details">
    <h2>National Parks</h2>
    <p class="description">
      Wildlife experts document the rich biodiversity throughout
      California's national parks. A must-have guide for any prospective
      visitor.
    </p>
    <p class="price">${price}.00</p>

    <div class="quantity-row">
      <label for="quantity">Quantity:</label>
      <div class="quantity-controls">
        <Button onclick={decrement} aria-label="Decrease quantity">−</Button>
        <span id="quantity">{quantity}</span>
        <Button onclick={increment} aria-label="Increase quantity">+</Button>
      </div>
    </div>

    <p class="total">Total: <strong>${total}.00</strong></p>

    <form method="POST" action="/checkout">
      <input type="hidden" name="quantity" value={quantity} />
      <Button type="submit">Proceed to Checkout</Button>
    </form>

    <Accordion.Root type="single" class="w-full" value="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Product Information</Accordion.Trigger>
        <Accordion.Content class="flex flex-col gap-4">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and
            experts.
          </p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Shipping Details</Accordion.Trigger>
        <Accordion.Content class="flex flex-col gap-4">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express
            shipping ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Return Policy</Accordion.Trigger>
        <Accordion.Content class="flex flex-col gap-4">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return
            the item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </div>
</div>

<style>
  .book-card {
    display: flex;
    gap: 5.8rem;
    padding: 2rem;
  }

  .book-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #2c1810;
    margin: 0;
  }

  .description {
    color: #555;
    line-height: 1.6;
    margin: 0;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .quantity-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  label {
    font-size: 1rem;
    color: #444;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .quantity-controls span {
    font-size: 1.2rem;
    min-width: 24px;
    text-align: center;
  }

  .total {
    font-size: 1.1rem;
    color: #444;
    margin: 0;
  }

  @media (max-width: 600px) {
    .book-card {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
