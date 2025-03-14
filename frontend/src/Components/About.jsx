import React from "react";
import "./Styles/About.css";
import gasAbout from "./Images/gas_about.jpg";
const About = () => {
	return (
		<div className="about">
			<div className="about-container">
				<h2>Про нас</h2>
				<img src={gasAbout} className="about-image" />
				<p>
					Ми займаємося постачанням природного газу споживачам.
					Забезпечуємо стабільне постачання газу, дбаючи про безпеку та 
					комфорт наших клієнтів.
				</p>
				<h3>Наші послуги</h3>
				<ul>
					<li>Підключення до газових мереж</li>
					<li>Технічне обслуговування</li>
					<li>Екстренна служба підтримки</li>
					<li>Консультації щодо тарифів та оплати</li>
				</ul>
			</div>
		</div>
	);
};

export default About;