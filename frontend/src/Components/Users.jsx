import React, { useState, useEffect } from "react";
import User from "./User";
import { MdBlock } from "react-icons/md";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users')
            const data = await response.json();
            const filteredUsers = data.items.filter(user => !user.isBanned);
            setUsers(filteredUsers);
        } catch (error) {
            console.error(error);
        }
    }

    const blockUser = async user => {
        try {
            const response = await fetch('http://localhost:5000/add-blocked-user', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) throw new Error('Помилка при блокуванні користувача');

            fetchUsers(); // Обновление списка пользователей
        } catch (error) {
            alert('Помилка');
        }
    }
    const deleteFromUserList = async _id => {
        try {
        const response = await fetch(`http://localhost:5000/delete-from-userlist/${_id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Помилка при блокуванні користувача');
        alert('Користувач заблокований!');
        fetchUsers(); // Обновляем список после удаления
        } catch (error) {
            console.error('Помилка при блокуванні користувача:', error);
            alert('Произошла ошибка');
        }
    }

    return (
        <div className="users">
            {localStorage.getItem('registered-user-admin') || 
            localStorage.getItem('logged-user-admin') ?
            <>
                <h1 style={{margin: "0"}}>Користувачі</h1>
                <ul>
                    {users.map((user) => (
                        <div key={user._id} style={{display: "flex"}}>
                            <User 
                                name={`Ім'я: ${user.name}`} 
                                surname={`Прізвище: ${user.surname}`} 
                                email={`Електронна пошта: ${user.email}`}/>
                            <div className="unblock-icon-container"><MdBlock className="unblock-icon" onClick={() => {
                                blockUser(user);
                                deleteFromUserList(user._id);
                            }}/></div>
                        </div>
                    ))}
                </ul>
            </>
            :
                <strong style={{fontSize: "20px", color: "red", paddingTop: "30px"}}>
                    Ви не адміністратор!
                </strong>
            }
        </div>
    )
}

export default Users;