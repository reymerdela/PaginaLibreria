// import { crearTarjeta } from "./tarjeta.js";

const heroImg = document.getElementById("hero-img");

const intervaloHero = () => {
  let i = 2;
    setInterval(() => {
      heroImg.setAttribute("src", `/assets/libros/libro${i}.gif`);
      i++;
      if (i == 10) {
        i = 1;
      }
    }, 4000);
};

intervaloHero();