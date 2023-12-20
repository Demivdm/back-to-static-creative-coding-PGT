document.addEventListener("DOMContentLoaded", function () {
  const downButton = document.querySelector("button");

  downButton.onclick = startJump;

  function startJump() {
    let human = document.querySelector(".human");
    human.classList.toggle("jump-down");
  }
});
