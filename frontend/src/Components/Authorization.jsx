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
        <div className="authorization">
			<form className="authorization-form" onSubmit={handleSubmit}>
                <div>
                    <h2>Авторизація</h2>
                    <p>Логін</p> 
                    <div className="inputes">
                        <input	
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <p>Пароль</p>
                    <div className="inputes">
                        <input
                            type="passord"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> 
                    <div style={{marginTop: "20px", textAlign: "center"}}>
                        <button type="submit">Увійти</button>
                    </div>
                </div>
			</form>
		</div>
	);
};

export default Authorization;