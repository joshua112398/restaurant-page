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

  const loadHeroContentMenu = function() {
    heroTitle.textContent = "Our Menu";
    heroText.textContent = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
  }
  
  const loadMainContentMenu = function() {
    
    let title = "Chocolate-Filled Croissant ... $7.00";
    let text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    let imgSrc = croissant;
    let imgAlt = "croissants";
    let homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();

    title = "Macarons ... $2.00";
    text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    imgSrc = croissant;
    imgAlt = "macarons";
    homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();

    title = "Pistachio Cupcakes ... $4.50";
    text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    imgSrc = croissant;
    imgAlt = "pistachio-cupcakes";
    homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();

    title = "Matcha Latte ... $6.50";
    text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    imgSrc = croissant;
    imgAlt = "pistachio-cupcakes";
    homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();

    title = "Cream Puff ... $5.00";
    text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    imgSrc = croissant;
    imgAlt = "pistachio-cupcakes";
    homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();

    title = "Strawberry Eclair ... $4.50";
    text = "Curabitur interdum nunc enim, vel sollicitudin tellus hendrerit sed. Fill your mouth with luscious and sweet pastries, fresh from the oven and baked with love and perfection. You won't find anything else like it anywhere in the country!";
    imgSrc = croissant;
    imgAlt = "pistachio-cupcakes";
    homeMainElement = mainElement(imgSrc, imgAlt, title, text);
    homeMainElement.loadElement();
  }
  
  
  export {loadMainContentMenu, loadHeroContentMenu};
  