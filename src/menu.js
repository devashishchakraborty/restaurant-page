function displayMenu(main){
    main.textContent = "";
    const menu = document.createElement("div");
    menu.setAttribute("class", "menuContent");
    menu.textContent = "This is Menu";
    main.appendChild(menu);
}

export { displayMenu }