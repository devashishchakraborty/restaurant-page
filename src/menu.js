function displayMenu(main){
    const menu = document.createElement("div");
    menu.setAttribute("class", "menuContent");
    menu.innerHTML = "<h2>Appetizers</h2> <ul> <li>Samosas</li> <li>Pakoras</li> <li>Aloo Tikki</li> </ul> <h2>Entrees</h2> <ul> <li>Chana Masala</li> <li>Saag Paneer</li> <li>Baingan Bharta</li> <li>Aloo Gobi</li> <li>Vegetable Korma</li> </ul> <h2>Breads</h2> <ul> <li>Naan</li> <li>Roti</li> </ul> <h2>Desserts</h2> <ul> <li>Gulab Jamun</li> <li>Kheer</li> </ul>";
    main.appendChild(menu);
}

export { displayMenu }