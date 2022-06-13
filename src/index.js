import normalize from "normalize.css";
import css from "./style.css";
import bg from "./kirsten-drew-n49BjsFf5dI-unsplash.jpg"

// Manage loading of the homepage's different elements
import {
  setup, 
  main, 
  heroTitle, 
  heroText,
} from "./loader.js"

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

    main.appendChild(mainElement);
    mainElement.appendChild(mainElementContent);
    mainElement.appendChild(mainImg);
    mainElementContent.appendChild(elementTitle);
    mainElementContent.appendChild(elementText);
  }

  return {loadElement};

}

export {
  mainElement,
}

setup();

