const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const openCookieBtn = document.querySelector("#cookie-btn");
const tryOtherCookie = document.querySelector("try-again-btn");

function handleScreenChange(event) {
  event.preventDefault();

  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

openCookieBtn.addEventListener("click", handleScreenChange);

tryOtherCookie.addEventListener("click", handleScreenChange);
