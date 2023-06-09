function displayMenu(main){
    const menu = document.createElement("div");
    menu.setAttribute("class", "menuContent");
    menu.innerHTML = "<h1>Menu<h1>\
    <h2>Starters</h2>\
    <ul>\
      <li><strong>Samosas:</strong> Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney</li>\
      <li><strong>Paneer Tikka:</strong> Marinated and grilled Indian cottage cheese, served with mint chutney</li>\
      <li><strong>Aloo Tikki:</strong> Spiced potato patties served with chutney and yogurt</li>\
      <li><strong>Hara Bhara Kebab:</strong> Spinach and green pea patties with spices</li>\
    </ul>\
    \
    <h2>Main Course</h2>\
    <ul>\
      <li><strong>Palak Paneer:</strong> Spinach and Indian cottage cheese curry, served with naan or rice</li>\
      <li><strong>Chana Masala:</strong> Spicy chickpea curry, served with bhatura or rice</li>\
      <li><strong>Baingan Bharta:</strong> Roasted eggplant mash cooked with spices, served with roti or rice</li>\
      <li><strong>Dal Makhani:</strong> Creamy black lentil curry, served with naan or rice</li>\
      <li><strong>Vegetable Biryani:</strong> Layered rice dish with mixed vegetables and spices</li>\
    </ul>\
    \
    <h2>Desserts</h2>\
    <ul>\
      <li><strong>Gulab Jamun:</strong> Sweet milk dumplings in rose syrup, served warm</li>\
      <li><strong>Ras Malai:</strong> Sweetened milk with paneer balls, garnished with nuts</li>\
      <li><strong>Kulfi:</strong> Indian ice cream in various flavors such as mango, pistachio and rose</li>\
      <li><strong>Gajar Halwa:</strong> Carrot pudding cooked with milk and sugar, garnished with nuts</li>\
    </ul>";
    main.appendChild(menu);
}

export { displayMenu }