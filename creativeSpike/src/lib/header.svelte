<script>
  import { onMount } from "svelte";

  let scrollPosition = 0;
  let scrollArea;
  let isRidiculous = false;

  onMount(() => {
    if (scrollArea) {
      scrollArea.addEventListener("scroll", () => {
        // Update the scroll position when scrolling within the scroll area
        scrollPosition = scrollArea.scrollTop;
      });
    }
  });
  if (scrollArea) {
    scrollArea.addEventListener("scroll", () => {
      const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
      const scrollPercentage = (scrollArea.scrollTop / maxScroll) * 100;

      // Rotate the scrollbar thumb image based on scroll position
      const rotationDegree = scrollPercentage >= 100 ? 180 : 0;
      scrollArea.style.setProperty("--rotation-degree", `${rotationDegree}deg`);
    });
  }

  // Reactive block to dynamically update the style
  $: textStyle = `
    text-shadow: -${scrollPosition / 2}px ${scrollPosition / 2}px 0 #000000;
    transform: perspective(500px) rotateX(${scrollPosition / 5}deg);
  `;

  const toggleRidiculous = () => {
    isRidiculous = !isRidiculous;
  };
</script>

<header>
  <img src="/hva-triangle.svg" alt="" class="graphic" />
  <img src="/logo.svg" class="graphic" alt="" />
  <div bind:this={scrollArea} class="scroll-area">
    <h1 style={textStyle} class:ridiculous={isRidiculous}>
      Platform grote thema's
    </h1>
    <p>scroll me up and down</p>
  </div>

  <ul>
    <li><a href="/" style={textStyle}>Werkvormen</a></li>
    <li><a href="/" style={textStyle}>Uploaden</a></li>
    <li><a href="/" style={textStyle}>Inloggen</a></li>
    <button on:click={toggleRidiculous}>Make it more ridiculous</button>
  </ul>
</header>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap");
  :root {
    --main-dark: #1e1649;
    --secondary-pink: #f25379;
  }
  header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 50px;
    font-family: sans-serif;

    height: 45vh;
  }
  img:nth-of-type(2) {
    height: 1.5rem;
    padding: 0.5rem;
  }

  .scroll-area {
    grid-area: 2 / 1 / 3 / 5;
    display: flex;
    align-items: baseline;
    justify-content: center;
    overflow-y: scroll;
    height: 4rem;
    position: relative;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  h1 {
    color: #f25379;
    transition: text-shadow 0.3s ease;
    font-size: 5rem;
    top: 0;
    position: absolute;
  }
  p {
    color: red;
    position: absolute;
    right: 0;
    font-weight: 900;
    width: 6rem;
    animation: noticeMe 0.5s ease-in-out infinite;
  }
  @keyframes noticeMe {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
  }
  h1,
  a,
  button {
    text-transform: uppercase;
  }

  ul {
    grid-area: 3 / 1 / 4 / 5;
    display: flex;
    justify-content: space-evenly;
  }

  ul li {
    list-style-type: none;
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: var(--main-dark);
    display: flex;
    align-items: center;
    height: max-content;
  }
  ul li:hover {
    background-color: var(--secondary-pink);
  }
  button {
    height: max-content;
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: var(--main-dark);
    box-shadow: 0;
    margin: 0;
    border: 0;
    color: white;
    font-weight: 900;
    font-size: 1rem;
    animation: shakeButton 0.5s ease-in-out infinite;
    font-family: sans-serif;
  }
  button:hover {
    background: linear-gradient(
      to right,
      violet 0%,
      indigo 16.666%,
      blue 33.333%,
      green 50%,
      yellow 66.666%,
      orange 83.333%,
      red 100%
    );
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 900;
  }

  img:first-child {
    max-width: 10rem;
  }

  img:first-child {
    max-width: 8rem;
  }

  .graphic {
    position: absolute;
  }

  @keyframes shakeButton {
    0%,
    100% {
      transform: translateY(0); /* Initial and final position: no translation */
    }
    25%,
    75% {
      transform: translateY(-2px); /* Move the button to the left */
    }
    50% {
      transform: translateY(5px); /* Move the button to the right */
    }
  }
  .ridiculous {
    /* Your rainbow animation or color styles go here */
    /* For example, use keyframes for rainbow animation */
    animation: rainbowAnimation 2s infinite linear;
    font-family: "Rubik Bubbles", sans-serif;
  }

  @keyframes rainbowAnimation {
    0% {
      color: red;
    }
    16.666% {
      color: orange;
    }
    33.333% {
      color: yellow;
    }
    50% {
      color: green;
    }
    66.666% {
      color: blue;
    }
    83.333% {
      color: indigo;
    }
    100% {
      color: violet;
    }
  }

  @keyframes smallHeader {
    20% {
      scale: 0.9;
    }
    50% {
      scale: 0.8;
    }
    100% {
      position: sticky;
    }
  }

  /* scroll bar */
  .scroll-area::-webkit-scrollbar {
    width: 20px;
  }

  .scroll-area::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .scroll-area::-webkit-scrollbar-thumb {
    background-image: url("arrow v-2.png");
    background-position: center top;
    background-repeat: no-repeat, no-repeat;
    background-size: 50px;
    transform: rotate(0);
  }

  @media (min-width: 30rem) {
  }

  @media (min-width: 48rem) {
  }

  @media (min-width: 64rem) {
  }
</style>
