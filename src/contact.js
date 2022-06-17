import {
    heroTitle,
    heroText,
    main
} from "./loader.js"


const loadHeroContentContact = function() {
    heroTitle.textContent = "Contact Us";
    heroText.textContent = "Got any questions or concerns? Want to order one of our amazing menu items? Reach out using the contact information below!";
}

const loadMainContentContact = function() {
    let contactInfo = document.createElement("div");
    let div = document.createElement("div");
    let title = document.createElement("p");
    let text = document.createElement("p");

    main.appendChild(contactInfo);
    contactInfo.setAttribute("id", "contact-info");
    contactInfo.appendChild(div);
    div.appendChild(title);
    title.classList.add("bold-p");
    title.textContent = "CALL US";
    div.appendChild(text);
    text.textContent = "+1 (650) 239-5932";

    div = document.createElement("div");
    title = document.createElement("p");
    text = document.createElement("p");

    contactInfo.classList.add("contact-info");
    contactInfo.appendChild(div);
    div.appendChild(title);
    title.classList.add("bold-p");
    title.textContent = "EMAIL US";
    div.appendChild(text);
    text.textContent = "pamspastriesco@gmail.com";

    div = document.createElement("div");
    title = document.createElement("p");
    text = document.createElement("p");
    const textTwo = document.createElement("p");

    contactInfo.classList.add("contact-info");
    contactInfo.appendChild(div);
    div.appendChild(title);
    title.classList.add("bold-p");
    title.textContent = "BUSINESS HOURS";
    div.appendChild(text);
    text.textContent = "Mon - Fri ... 9AM to 5PM";
    textTwo.textContent = "Sat - Sun ... Closed";
}

export {loadHeroContentContact, loadMainContentContact};