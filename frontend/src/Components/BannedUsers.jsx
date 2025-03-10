import React, { useEffect, useState } from "react";
import BannedUser from "./BannedUser";

const BannedUsers = () => {
    const [users, setUsers] = useState([]);

    const callApiFromBackend = async () => {
        const response = await fetch('/api/users');
        const body = await response.json();

        return body;
    }

    useEffect(() => {
        // callApiFromBackend()
        // .then(res => setUsers(res));

        const fetchData = async () => {
            const res = await fetch('http://localhost:5000');
            const data = await res.json();
            setUsers(data.items);
            console.log((data));
        }
        fetchData()
    }, []);

    return (
        <div className="banned-users">
            BannedUsers

            {/* {users.map((item) => (
                <BannedUser key={item.id} users={users} email={item.email} isBanned={item.isBanned}/>
            ))} */}

            {users.map((user) => (
                <p key={user._id}>{user.name}, {user.password}</p>
            ))}
            
        </div>
    )
}

export default BannedUsers;