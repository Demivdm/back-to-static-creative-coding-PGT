<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your website description here" />
    <meta name="keywords" content="keyword1, keyword2, keyword3" />
    <meta name="author" content="Your Name" />

    <link rel="icon" href="favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Ewert&family=Fascinate+Inline&display=swap"
      rel="stylesheet"
    />
    <title>PGT Creative Spike</title>
  </head>
  <body>
    <section class="creative-spike">
      <div class="stage-bar bar-left">
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
      </div>
      <h1>Platform Grote Thema's</h1>
      <section class="nav">
        <ul>
          <li><a href="#">Inloggen</a></li>
          <li><a href="#">Uploaden</a></li>
        </ul>
      </section>
      <section class="werkvormen">
        <article>
          <h2>Waarom is X belangrijk voor jou</h2>
          <p>
            Een werkvorm om het ontwerpproces persoonlijker voor de student te
            maken.
          </p>
          <a href="#">Lees meer</a>
        </article>
        <article>
          <h2>Waarom is X belangrijk voor jou</h2>
          <p>
            Een werkvorm om het ontwerpproces persoonlijker voor de student te
            maken.
          </p>
          <a href="#">Lees meer</a>
        </article>
      </section>
      <div class="stage-bar bar-right">
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
        <div class="stage-light"></div>
      </div>
    </section>
  </body>
</html>

<style>
  :root {
    --main-bg-color: #351eb6;
    --werkvorm-bg: #1e1649;
    --font-color: #ffffff;
    --stage-color: #000000;
    --lights-bg-color: #f25379;
  }

  body {
    font-family: "Fascinate Inline", cursive;
    background-color: var(--main-bg-color);
    color: var(--font-color);
    margin: 0;
    box-sizing: border-box;
  }

  .creative-spike {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
  }

  h1 {
    font-family: "Ewert", cursive;
    grid-area: 1 / 2 / 2 / 3;
    align-self: center;
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
    font-size: 2.5em;
  }

  a {
    color: var(--font-color);
  }

  .nav {
    grid-area: 2 / 2 / 3 / 3;
    height: max-content;
  }

  .nav a {
    text-decoration: none;
    border: 3px solid #f25379;
    padding: 0.1em 0.5em 0.1em 0.5em;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
  }

  ul li {
    list-style-type: none;
    padding: 1em;
  }

  .werkvormen a {
    text-decoration: none;
    border: 3px solid #f25379;
    padding: 0.1em 0.5em 0.1em 0.5em;
  }

  article {
    margin-bottom: 5em;
    background-color: var(--werkvorm-bg);
    padding: 1em;
  }

  article p {
    padding: 1em 0 1em 0;
  }

  .stage-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: var(--lights-bg-color);
    align-items: center;
    width: 3em;
  }

  .werkvormen {
    grid-area: 3 / 2 / 4 / 3;
  }

  .bar-left {
    grid-area: 1 / 1 / 4 / 2;
    margin-left: auto;
  }

  .bar-right {
    grid-area: 1 / 3 / 4 / 4;
  }

  .stage-light {
    width: 20px;
    height: 20px;
    background-color: rgb(255, 255, 177);
    border-radius: 50%;
    margin: 5px;
    animation: blink 1s infinite alternate;
    filter: blur(2px);
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }
</style>
