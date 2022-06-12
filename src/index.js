import normalize from "normalize.css";
import css from "./style.css";
import bg from "./kirsten-drew-n49BjsFf5dI-unsplash.jpg"
import bread from "./food-svgrepo-com.svg"
import croissant from "./conor-brown-sqkXyyj4WdE-unsplash.jpg"

// Manage loading of the homepage's different elements
const Loader = (() => {

  const content = document.querySelector("#content");
  const hero = document.createElement("div");

  const setup = function() {
    hero.classList.add("hero");
    content.appendChild(hero);
    console.log("Loader");
    Header.load();
  }

  return {setup, hero};
})();

const Header = (() =>{

  const load = function() {
    const img = document.createElement("img");
    img.setAttribute("src", bread);
    img.classList.add("logo");
    const header = document.createElement("div");
    header.classList.add("header");
    Loader.hero.appendChild(img);
    Loader.hero.appendChild(header);
  }

  return {load};
})();

const Homepage = function() {

  const load = function() {
    const body = document.querySelector("#content");

  }

  return {load};
};

Loader.setup();