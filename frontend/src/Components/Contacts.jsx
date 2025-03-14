import React from "react";
import "./Styles/Contacts.css";
import phoneIcon from "./Images/phone-icon.png";
import emailIcon from "./Images/email-icon.png";
import locationIcon from "./Images/location-icon.png";
import contactImage from "./Images/contact-image.png";

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="contacts-container">
				<h2>Контакти</h2>
				<img src={contactImage} className="contacts-image" />
				<p>
					Ви можете зв'язатися з нами за наведеними нижче контактами. Ми завжди раді допомогти!
				</p>
				
				<h3>Наші контакти</h3>
				<ul>
					<li>
						<img src={phoneIcon} alt="Телефон" />
						+ 38 (044) 635-74-32
					</li>
					<li>
						<img src={emailIcon} alt="Email" />
						info@gorgas.com.ua
					</li>
					<li>
						<img src={locationIcon} alt="Адреса" />
						м. Київ, вул. Газова, 12
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contacts;