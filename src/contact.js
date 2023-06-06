function displayContact(main) {
    main.textContent = "";
    const contact = document.createElement("div");
    contact.setAttribute("class", "contactContent");
    contact.innerHTML = "<h1>Contact Us</h1> <h2>Address</h2> <p>Garuda Vegetarian Restaurant<br> Alam Avenue, Shah Alam<br> Selangor, Malaysia</p> <h2>Phone</h2> \
	<p>+60 3-1234 5678</p>\
	<h2>Mobile</h2>\
	<p>+60 12-345 6789</p>\
	<h2>Email</h2>\
	<p><a href='mailto:info@garudaveg.com'>info@garudavegetarian.com</a></p>\
	<p>We look forward to hearing from you!</p>";
    main.appendChild(contact);
}

export { displayContact }