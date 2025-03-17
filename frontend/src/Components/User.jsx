import React from "react";
import './Styles/User.css'

const User = (props) => (
    <div className="user">
        <div style={{display: "flex"}}>
            <p className="user-name">{props.name}</p>
            <p className="user-surname">{props.surname}</p>
            <p className="user-email">{props.email}</p>
        </div>
    </div>
)

export default User;