<script>
  import { onMount } from "svelte";

  // scrollpositie staat standaard op 0
  let scrollPosition = 0;
  // variabele aangemaakt voor scrollarea, de div is gebind waardoor ik er een variabele van kan maken
  let scrollArea;
  // de functie voor het togglen van de knop staat standaard uit.
  let isRidiculous = false;

  // onmount betekent dat de volgende functies pas gestart worden wanneer het component is ingeladen
  onMount(() => {
    // als scrollArea bestaan voer dan de volgende functie uit
    if (scrollArea) {
      // scroll is een standaard event listener
      // () => is de arrow function syntax van javascript
      // tussen de haakjes zou een parameter kunnen staan

      // hieronder staat de lange manier om het uit te schrijven
      //       scrollArea.addEventListener("scroll", function() {
      //   scrollPosition = scrollArea.scrollTop;
      // });
      scrollArea.addEventListener("scroll", () => {
        // deze lijn code neemt de waarde van de variabele van scrollpostion aan (dat is in dit geval 0)
        // daarna wordt de scrollpositie van scrollArea overgenomen en er word gekeken hoe ver er is gescrollt vanaf de bovenkant
        // en nu wordt scrollposition geupdate tegelijkertijd met de huidige positie van de scrollbar
        //  scrollTop is een property die kijkt hoeveel er verticaal is gescrollt
        scrollPosition = scrollArea.scrollTop;
      });
    }
  });

  // $ declareert een reactief element
  // een reacief element is een element dat automatisch update wanneer de variabele veranderen
  // $: is een afkorting
  // wanneer de scrollpositie veranderd worden de styles automatisch aangepast
  // backticks om de style te defineeren
  // de eerste scrollposition is voor een negatieve horizontale offset
  // de tweede scrollposition bepaald de verticale offset
  // de /2 staat erachter zodat de text shadow iets dichterbij de letters blijft
  // wanneer je 2px veranderd in bijvoorbeeld 10px dan komt de textshadow dichter op de tekst te staan
  // transform werkt op dezelfde manier
  $: textStyle = `
    text-shadow: -${scrollPosition / 2}px ${scrollPosition / 2}px 0 #000000;
    transform: perspective(500px) rotateX(${scrollPosition / 5}deg);
  `;

  // variable om te toggelen wordt aangemaakt
  const toggleRidiculous = () => {
    // ! betekent niet
    // dit statement veranderd de staat van de variabele isRidiculious
    // wanneer deze op true staat wordt ie naar false getoggelt en visa versa
    isRidiculous = !isRidiculous;
  };
</script>

<header>
  <img src="/hva-triangle.svg" alt="" class="graphic" />
  <img src="/logo.svg" class="graphic" alt="" />
  <!-- bind gebruikt om de div met een variabele op te halen om met js te kunnen manipuleren -->
  <div bind:this={scrollArea} class="scroll-area">
    <!-- style toegevoegd die veranderd op scroll -->
    <!-- class toegevoegd zodat de h1 het element is waarop de toggle wordt uitgevoerd -->
    <h1 style={textStyle} class:ridiculous={isRidiculous}>
      Platform grote thema's
    </h1>
    <p>scroll me up and down</p>
  </div>

  <ul>
    <li><a href="/" style={textStyle}>Werkvormen</a></li>
    <li><a href="/" style={textStyle}>Uploaden</a></li>
    <li><a href="/" style={textStyle}>Inloggen</a></li>
    <!-- de on:click is de trigger voor de functie en triggert daarmee de toggle -->
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
      transform: translateY(0); /* begin en eindputn is 0 */
    }
    25%,
    75% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(5px);
    }
  }
  .ridiculous {
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

  /* scroll bar */
  .scroll-area::-webkit-scrollbar {
    width: 20px;
  }

  /* voor de "baan" van de scrollbar */

  .scroll-area::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* voor de knop binnen de scrollbar */
  .scroll-area::-webkit-scrollbar-thumb {
    background-image: url("arrow v-2.png");
    background-position: center top;
    background-repeat: no-repeat, no-repeat;
    background-size: 50px;
  }
</style>
