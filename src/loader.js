import bread from "./food-svgrepo-com.svg"
import {loadMainHome, loadHeroContentHome} from "./home.js"

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
    loadHeroContentHome();

    loadMainHome();
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

  export {
    setup, 
    main, 
    heroTitle, 
    heroText,
  };