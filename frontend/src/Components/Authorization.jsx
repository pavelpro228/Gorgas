import React, { useState, useEffect } from "react";
import "./Styles/Authorization.css";

const Authorization = () => {
    const [authorizationText, setAuthorizationText] = useState("Register");

    const [users, setUsers] = useState([]);
    const [formDataRegister, setFormDataRegister] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        isBanned: false
    });
    const [formDataSignIn, setFormDataSignIn] = useState({
        email: '',
        password: '',
    });

    // Загрузка пользователей при монтировании компонента
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) throw new Error('Помилка при завантаженні даних');
        const data = await response.json();
        setUsers(data.items);
        } catch (error) {
            console.error('Помилка при завантаженні користувачів:', error);
        }
    };

    // Обработка изменений в полях формы
    const handleChangeRegister = (e) => {
        setFormDataRegister({
        ...formDataRegister,
        [e.target.name]: e.target.value,
        });
    };

    const handleChangeSignIn = (e) => {
        setFormDataSignIn({
        ...formDataSignIn,
        [e.target.name]: e.target.value,
        });
    }

    // Отправка данных на сервер
    const handleSubmitRegister = async (e) => {
        let flag = true
        e.preventDefault();

        users.find((user) => {
            if (user.email == formDataRegister.email) {
                flag = false;
                alert("Цей email вже зайнятий!");
            } 
        })
        if (flag == true) {
            try {
                const response = await fetch('http://localhost:5000/add-user', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formDataRegister),
                });
    
                if (!response.ok) throw new Error('Помилка при додаванні користувача');
                const result = await response.json();
                window.location.href = '/';
                alert('Ви успішно зареєструвались!');
                if (formDataRegister.email === "admingorgasbuylin@gmail.com" ||
                    formDataRegister.email === "admingorgaspolshin@gmail.com"
                ) {
                    localStorage.setItem('registered-user-admin', JSON.stringify(result))
                    if (localStorage.getItem('registered-user') != null) localStorage.removeItem('registered-user')
                    if (localStorage.getItem('logged-user') != null) localStorage.removeItem('logged-user')
                }
                else {
                    localStorage.setItem('registered-user', JSON.stringify(result))
                    if (localStorage.getItem('logged-user') != null) localStorage.removeItem('logged-user')
                    if (localStorage.getItem('logged-user-admin') != null) localStorage.removeItem('logged-user-admin')
                    if (localStorage.getItem('registered-user-admin') != null) localStorage.removeItem('registered-user-admin')
                }

                
                setFormDataRegister({ name: '', surname: '', email: '', password: '' }); // Очистка формы
                fetchUsers(); // Обновление списка пользователей
            } catch (error) {
                console.error('Помилка при додаванні користувача:', error);
                alert('Помилка');
            }
        }
        
    };
	
	const handleSubmitSignIn = (e) => {
        let flag = false
		e.preventDefault();

        users.find((user) => {
            if (user.email == formDataSignIn.email && user.password == formDataSignIn.password) {
                flag = true;
                window.location.href = '/';
                alert("Ви успішно авторизувались!");
                if (formDataSignIn.email === "admingorgasbuylin@gmail.com" || 
                    formDataSignIn.email === "admingorgaspolshin@gmail.com"
                ) {
                    localStorage.setItem('logged-user-admin', JSON.stringify(user))
                    if (localStorage.getItem('registered-user') != null) localStorage.removeItem('registered-user')
                    if (localStorage.getItem('logged-user') != null) localStorage.removeItem('logged-user')
                }
                else {
                    localStorage.setItem('logged-user', JSON.stringify(user))
                    if (localStorage.getItem('registered-user') != null) localStorage.removeItem('registered-user')
                    if (localStorage.getItem('registered-user-admin') != null) localStorage.removeItem('registered-user-admin')
                    if (localStorage.getItem('logged-user-admin') != null) localStorage.removeItem('logged-user-admin')
                }

                setFormDataSignIn({ email: '', password: '' }); // Очистка формы
            } 
        })
        if (flag == false) alert("Неправильний логін або пароль!");
	};

    const switchToRegister = () => {
        setAuthorizationText("Register");
    }

    const switchToSignIn = () => {
        setAuthorizationText("Sign In");
    }
	
	return (
        <div className="authorization">
            <div>
                <div className="buttons">
                    <button onClick={switchToRegister}>Реєстрація</button>
                    <button onClick={switchToSignIn}>Увійти</button>
                </div>
                {authorizationText == "Register" &&
                <form className="authorization-form" onSubmit={handleSubmitRegister}>
                    <div className="register">
                        <h2>Авторизація</h2>
                        <div className="inputes">
                            <p>Ім'я</p> 
                            <input	
                                type="text"
                                name="name"
                                value={formDataRegister.name}
                                onChange={handleChangeRegister}
                                required
                            />
                            <p>Прізвище</p> 
                            <input	
                                type="text"
                                name="surname"
                                value={formDataRegister.surname}
                                onChange={handleChangeRegister}
                                required
                            />
                            <p>Електронна пошта</p> 
                            <input	
                                type="email"
                                name="email"
                                value={formDataRegister.email}
                                onChange={handleChangeRegister}
                                required
                            />
                            <p>Пароль</p>
                            <input
                                type="password"
                                name="password"
                                value={formDataRegister.password}
                                onChange={handleChangeRegister}
                                required
                            />
                        </div> 
                        <div style={{marginTop: "20px", textAlign: "center"}}>
                            <button type="submit">Зареєструватися</button>
                        </div>
                    </div>
                </form>}
                {authorizationText == "Sign In" && 
                <form className="authorization-form" onSubmit={handleSubmitSignIn}>
                    <div className="sign-in">
                        <h2>Авторизація</h2>
                        <div className="inputes">
                            <p>Електронна пошта</p> 
                            <input	
                                type="text"
                                name="email"
                                value={formDataSignIn.email}
                                onChange={handleChangeSignIn}
                                required
                            />
                            <p>Пароль</p>
                            <input
                                type="password"
                                name="password"
                                value={formDataSignIn.password}
                                onChange={handleChangeSignIn}
                                required
                            />
                        </div> 
                        <div style={{marginTop: "20px", textAlign: "center"}}>
                            <button type="submit">Увійти</button>
                        </div>
                    </div>
                </form>}
            </div>
		</div>
	);
};

export default Authorization;