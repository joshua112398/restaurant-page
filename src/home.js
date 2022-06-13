import {
  setup, 
  main, 
  heroTitle, 
  heroText,
} from "./loader.js"
import croissant from "./conor-brown-sqkXyyj4WdE-unsplash.jpg"
import {
  mainElement,
} from "./index.js"
  
  const loadHeroContentHome = function() {
    heroTitle.textContent = "Pam's Pastries";
    heroText.textContent = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
  }

  const loadMainHome = function() {
    const title = "About Us";
    const text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    const imgSrc = croissant;
    const imgAlt = "croissants";
    const homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();
  }

  export {loadMainHome, loadHeroContentHome};
