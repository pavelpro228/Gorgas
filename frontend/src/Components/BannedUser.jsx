import React from "react";
import './Styles/BannedUser.css'
import { CgUnblock } from "react-icons/cg";

const User = (props) => {
    const unBlock = () => {
        props.isBanned = false;
        // console.log(props.isBanned);
    }
    return (
        <div className="user">
            {props.isBanned && <div className="banned-user">
                <p className="blocked-user-email">{props.email}</p>
                <div className="unblock-icon-container"><CgUnblock className="unblock-icon" onClick={unBlock}/></div>
            </div>}
        </div>
    )
}

export default User;