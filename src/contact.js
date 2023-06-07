function displayContact(main) {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contactContent");
    contact.innerHTML = 
		"<h1>Contact Us</h1>\
			<h2>Address</h2>\
				<p>Garuda Vegetarian Restaurant<br> Imaginary Place <br>Delhi, India</p>\
			<h2>Phone</h2> \
				<p>+91 19841 92378</p>\
			<h2>Mobile</h2>\
				<p>+91 69420 69420</p>\
			<h2>Email</h2>\
				<p><a href='mailto:info@garudaveg.com'>info@garudavegetarian.com</a></p>\
				<p>We look forward to hearing from you!</p>";
    main.appendChild(contact);
}

export { displayContact }