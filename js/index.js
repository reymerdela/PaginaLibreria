const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav-bar");
const heroImg = document.getElementById("hero-img");

const intervaloHero = () => {
  let i = 2;
  setInterval(() => {
    heroImg.setAttribute("src", `./assets/libros/libro${i}.gif`);
    i++;
    if (i == 10) {
      i = 1;
    }
  }, 4000);
}

navBtn.addEventListener("click", () => {
navBar.classList.toggle("aside-nav");
});

intervaloHero();