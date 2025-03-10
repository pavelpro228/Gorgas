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
        callApiFromBackend()
        .then(res => setUsers(res));
    }, []);

    // const unBlock = (index) => {
    //     console.log(users[index].name);
    // }

    return (
        <div className="banned-users">
            BannedUsers

            {users.map((item) => (
                <BannedUser key={item.id} users={users} email={item.email} isBanned={item.isBanned}/>
            ))}
        </div>
    )
}

export default BannedUsers;