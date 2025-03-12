import React, { useState } from "react";
import "./Styles/Authorization.css";

const Authorization = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Логін", username, "Пароль", password);
	};
	
	return (
        <div className="authorization-container">
			<h2>Авторизація</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Логін
					<input	
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<label>
					Пароль
					<input
						type="passord"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="submit">Увійти</button>
			</form>
		</div>
	);
};

export default Authorization;