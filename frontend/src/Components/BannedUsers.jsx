import React, { useEffect, useState } from "react";
import BannedUser from "./BannedUser";

const BannedUsers = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
        password: '',
    });

    // Загрузка пользователей при монтировании компонента
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
        const response = await fetch('http://localhost:5000/');
        if (!response.ok) throw new Error('Помилка при завантаженні даних');
        const data = await response.json();
        setUsers(data.items);
        } catch (error) {
            console.error('Помилка при завантаженні користувачів:', error);
        }
    };

    // Обработка изменений в полях формы
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    // Отправка данных на сервер
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/add-user', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Помилка при додаванні користувача');
            const result = await response.json();
            alert(result.message || 'Користувач успішно доданий!');
            setFormData({ name: '', surname: '', age: '', email: '', password: '' }); // Очистка формы
            fetchUsers(); // Обновление списка пользователей
        } catch (error) {
            console.error('Помилка при додаванні користувача:', error);
            alert('Помилка');
        }
    };

    return (
        <div className="banned-users">
            BannedUsers

            <h1>Добавить пользователя</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                required
                />
                <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Фамилия"
                required
                />
                <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Возраст"
                required
                />
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                />
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
                />
                <button type="submit">Добавить</button>
            </form>

            <h2>Список пользователей</h2>
            <ul>
                {users.map((user) => (
                <li key={user._id}>
                    {user.name} {user.surname}, {user.age} лет, {user.email}
                </li>
                ))}
            </ul>
            
    </div>
    )
}

export default BannedUsers;