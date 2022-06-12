import normalize from "normalize.css";
import css from "./style.css";
import bg from "./kirsten-drew-n49BjsFf5dI-unsplash.jpg"
import bread from "./food-svgrepo-com.svg"
import croissant from "./conor-brown-sqkXyyj4WdE-unsplash.jpg"

// Manage loading of the homepage's different elements
const Loader = (() => {

  const content = document.querySelector("#content");
  const hero = document.createElement("div");
  const heroContent = document.createElement("div");
  const main = document.createElement("main");
  const heroTitle = document.createElement("h1");
  const heroText = document.createElement("p");

  const setup = function() {
    hero.classList.add("hero");
    content.appendChild(hero);
    console.log("Loader");
    loadHeader();
    content.appendChild(main);

    heroContent.classList.add("hero-content");
    hero.appendChild(heroContent);
    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroText);
    Home.loadHeroContent();

    Home.loadMain();
  }

  const loadHeader = function() {
    const img = document.createElement("img");
    const header = document.createElement("div");
    const ul = document.createElement("ul");

    img.setAttribute("src", bread);
    img.classList.add("logo");
    header.classList.add("header");
    hero.appendChild(img);
    hero.appendChild(header);
    header.appendChild(ul);
    console.log("hey");

    const links = ["HOME", "MENU", "CONTACT"];
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      ul.appendChild(li);
      li.appendChild(a);
      a.textContent = links[i];
    }
  }

  return {setup, main, heroTitle, heroText};
})();

const Home = (() =>{

  const loadHeroContent = function() {
    Loader.heroTitle.textContent = "Pam's Pastries";
    Loader.heroText.textContent = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
  }

  const loadMain = function() {
    const title = "About Us";
    const text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    const imgSrc = croissant;
    const imgAlt = "croissants";
    const homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();
  }

  return {loadMain, loadHeroContent};
})();

// Factory function for creating new main element objects, including
// a function to load the object onto the main area of the webpage
const mainElement = function(imageSrc, imageAlt, title, text) {
  const mainElement = document.createElement("div");
  const mainElementContent = document.createElement("div");
  const elementTitle = document.createElement("h2");
  const elementText = document.createElement("p");
  const mainImg = document.createElement("img");
  mainElement.classList.add("main-element");

  const loadElement = function() {
    elementTitle.textContent = title;
    elementText.textContent = text;
    mainImg.setAttribute("src", imageSrc);
    mainImg.setAttribute("alt", imageAlt);

    Loader.main.appendChild(mainElement);
    mainElement.appendChild(mainElementContent);
    mainElement.appendChild(mainImg);
    mainElementContent.appendChild(elementTitle);
    mainElementContent.appendChild(elementText);
  }

  return {loadElement};

}

Loader.setup();