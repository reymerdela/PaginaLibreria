import { crearTarjeta } from "./tarjeta.js";
const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav-bar");
const heroImg = document.getElementById("hero-img");
const btnAll = document.getElementById("btn-all");
const cardContainer = document.getElementById("card-container");

function generarTarjetas(){

}
crearTarjeta()


function mostrarTodo(n){
  btnAll.onclick = (ev)=>{
    ev.preventDefault(); 
  }
}

mostrarTodo(1)



const intervaloHero = () => {
  let i = 2;
  setInterval(() => {
    heroImg.setAttribute("src", `./assets/libros/libro${i}.gif`);
    i++;
    if (i == 10) {
      i = 1;
    }
  }, 8000);
}

navBtn.addEventListener("click", () => {
navBar.classList.toggle("aside-nav");
});


mostrarTodo();
intervaloHero();