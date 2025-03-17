import React, { useEffect, useState } from "react";
import User from "./User";
import { CgUnblock } from "react-icons/cg";

const BannedUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users/blocked');
            if (!response.ok) throw new Error('Помилка при завантаженні даних');
            const data = await response.json();
            setUsers(data.items);
        } catch (error) {
            console.error('Помилка при завантаженні користувачів:', error);
        }
    };

    const unBlock = async user => {
        try {
            const response = await fetch('http://localhost:5000/add-user', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) throw new Error('Помилка при розблокуванні користувача');
            const result = await response.json();
            console.log(result);

            fetchUsers(); // Обновление списка пользователей
        } catch (error) {
            alert('Помилка');
        }
    }

    const deleteFromBlockedUserList = async _id => {
        try {
        const response = await fetch(`http://localhost:5000/delete-from-blocked-userlist/${_id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Ошибка при удалении пользователя');
        alert('Користувач розблокований!');
        fetchUsers(); // Обновляем список после удаления
        } catch (error) {
            console.error('Помилка при розблокуванні користувача:', error);
            alert('Помилка');
        }
    }

    return (
        <div className="banned-users">
            {localStorage.getItem('registered-user-admin') || 
            localStorage.getItem('logged-user-admin') ?
            <>
                <h1 style={{margin: "0"}}>Заблоковані користувачі</h1>
                <ul>
                    {users.length > 0 ? users.map((user) => (
                        <div key={user._id} style={{display: "flex"}}>
                            <User email={`Електронна пошта: ${user.email}`}/>
                            <div className="unblock-icon-container"><CgUnblock className="unblock-icon" onClick={() => {
                                unBlock(user);
                                deleteFromBlockedUserList(user._id);
                            }}/></div>
                        </div>
                    ))
                :
                <strong style={{fontSize: "20px", color: "red", paddingTop: "30px"}}>
                    Заблокованих користувачів немає!
                </strong>
                }
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

export default BannedUsers;