function displayHome(main) {
    main.textContent = "";
    const home = document.createElement("div");
    home.setAttribute("class", "homeContent")
    home.innerHTML = "<p>We are a vegetarian restaurant that offers delicious, sumptuous and nutritious vegetarian food. Our menu is carefully crafted to cater to all your dietary needs and preferences. We use only the freshest ingredients and our dishes are prepared with love and care.</p> <p>Our restaurant is located in Area 51, Nevada. We have a cozy and comfortable dining area that is perfect for family gatherings, romantic dinners or casual meals with friends. Our friendly staff will make sure that you have a wonderful dining experience.</p> <p>We also offer catering services for all your special events. Whether it's a wedding, birthday party or corporate event, we can provide you with delicious vegetarian food that will impress your guests.</p> <p>Come and visit us today and experience the best vegetarian food in town!</p> "
    main.appendChild(home);
}

export { displayHome }