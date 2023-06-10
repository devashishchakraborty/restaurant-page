import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
import './style.css';
import Background from './background.jpg';

const content = document.querySelector("#content");
const header = document.createElement("header");
const main = document.createElement("main");
const title = document.createElement("div");
const navbar = document.createElement("nav");
const homeTab = document.createElement("div");
const menuTab = document.createElement("div");
const contactTab = document.createElement("div");


title.setAttribute("class", "title");
homeTab.setAttribute("class", "home");
menuTab.setAttribute("class", "menu");
contactTab.setAttribute("class", "contact");


title.textContent = "Garuda Vegetarian Restaurant";
homeTab.textContent = "HOME";
menuTab.textContent = "MENU";
contactTab.textContent = "CONTACT";

const myBackground = new Image();
myBackground.src = Background;


navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);

header.appendChild(title);
header.appendChild(navbar);

content.appendChild(header);
content.appendChild(main);

displayHome(main);

homeTab.addEventListener("click", function(){
    main.textContent = "";
    displayHome(main);
});

menuTab.addEventListener("click", function(){
    main.textContent = "";
    displayMenu(main);
});

contactTab.addEventListener("click", function(){
    main.textContent = "";
    displayContact(main);
});