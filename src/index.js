const header = document.createElement("header");
const content = document.querySelector("#content");

const title = document.createElement("div");
title.setAttribute("class", "title");

const navbar = document.createElement("nav");

const homeTab = document.createElement("div");
homeTab.setAttribute("class", "home");

const menuTab = document.createElement("div");
menuTab.setAttribute("class", "menu");

const contactTab = document.createElement("div");
contactTab.setAttribute("class", "contact");

title.textContent = "Garuda Vegetarian Restaurant";
homeTab.textContent = "HOME";
menuTab.textContent = "MENU";
contactTab.textContent = "CONTACT";


navbar.appendChild(homeTab);
navbar.appendChild(menuTab);
navbar.appendChild(contactTab);

content.appendChild(header);

header.appendChild(title);
header.appendChild(navbar);