import React, { useState, useEffect } from "react";
import "./Styles/Cabinet.css";
import gas_service from "./Images/handshake.webp";
import personal from "./Images/personal.jpg";

const Cabinet = () => {
    const [userData, setUserData] = useState({
        firstName: "VAN",
        lastName: "Perfomance Artist",
        email: "van.artist@example.com",
        address: "м. GYM, вул. DUNGEON, 17",
    });

    const [tariff, setTariff] = useState({
        name: "Базовий тариф",
        price: "300 грн/міс",
        conditions: "До 100 куб.м газу на місяць",
        validUntil: "31.12.2025",
    });

    const [tariffOptions, setTariffOptions] = useState([
        { name: "Преміум тариф", price: "500 грн/міс", conditions: "До 200 куб.м газу" },
        { name: "Економ тариф", price: "200 грн/міс", conditions: "До 50 куб.м газу" },
    ]);

    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const changeTariff = (option) => {
        setTariff({ ...option, validUntil: "31.12.2025" });
    };

    const handlePasswordChange = () => {
        alert(`Пароль змінено на: ${newPassword}`);
        setNewPassword("");
        setShowPasswordChange(false);
    };

    return (
        <div className="cabinet">
            <h1>Особистий кабінет</h1>
            <div className="user-info">
				<img src={personal} alt="Фото користувача" className="personal-photo" />
				<p><strong>Ім’я:</strong> {userData.firstName}</p>
				<p><strong>Прізвище:</strong> {userData.lastName}</p>
				<p><strong>Пошта:</strong> {userData.email}</p>
				<p><strong>Адреса проживання:</strong> {userData.address}</p>
			</div>

            <div className="password-section">
                <button onClick={() => setShowPasswordChange(!showPasswordChange)}>
                    {showPasswordChange ? "Скасувати" : "Змінити пароль"}
                </button>
                {showPasswordChange && (
                    <div className="password-change">
                        <input
                            type="password"
                            placeholder="Новий пароль"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button onClick={handlePasswordChange}>Підтвердити</button>
                    </div>
                )}
            </div>

            <div className="tariff-section">
                <h2>Активний тарифний план</h2>
                <p><strong>Назва:</strong> {tariff.name}</p>
                <p><strong>Умови:</strong> {tariff.conditions}</p>
                <p><strong>Ціна:</strong> {tariff.price}</p>
                <p><strong>Дійсний до:</strong> {tariff.validUntil}</p>

                {tariffOptions.length > 0 && (
                    <>
                        <h3>Інші доступні тарифи</h3>
                        <div className="tariff-list">
                            {tariffOptions.map((option, index) => (
                                <div className="tariff-option" key={index}>
                                    <strong>{option.name}</strong>
                                    <span>{option.conditions}, {option.price}</span>
                                    <button onClick={() => changeTariff(option)}>Обрати</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="cabinet-image">
                <img src={gas_service} alt="Газовий сервіс" />
            </div>
        </div>
    );
};

export default Cabinet;