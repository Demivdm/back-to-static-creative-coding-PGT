<script>
  import WerkvormCard from "../lib/WerkvormCard.svelte";
</script>

<section class="werkvormen">
  <article>
    <img src="" alt="" />
    <div>
      <div>
        <h2>Waarom is X belangrijk voor jou</h2>
        <p>Hier wordt de werkvorm beschreven</p>
        <a href="/">Bekijk werkvorm</a>
      </div>
    </div>
  </article>
  <article>
    <img src="" alt="" />
    <div>
      <div>
        <h2>Waarom is X belangrijk voor jou</h2>
        <p>Hier wordt de werkvorm beschreven</p>
        <a href="/">Bekijk werkvorm</a>
      </div>
    </div>
  </article>
  <article>
    <img src="" alt="" />
    <div>
      <div>
        <h2>Waarom is X belangrijk voor jou</h2>
        <p>Hier wordt de werkvorm beschreven</p>
        <a href="/">Bekijk werkvorm</a>
      </div>
    </div>
  </article>
</section>

<style>
  .werkvormen {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 5rem;
  }
  article {
    background: var(--main-dark);
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
    max-width: 20rem;
    padding: 0.8rem;
    color: white;
  }

  article > img {
    height: 10rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: all ease-in-out 0.2s;
  }

  article:hover > img {
    height: 7.5rem;
    margin-top: 2.5rem;
  }

  article:hover a {
    transform: translateX(0.8rem);
  }

  article > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.9rem;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: underline;
    font-weight: 600;
    font-size: 1rem;
    transition: all ease-in-out 0.2s;
    color: white;
  }

  a:focus {
    outline: solid 2px var(--color-hva-pink);
  }
</style>
