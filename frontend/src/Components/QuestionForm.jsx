import React, { useState } from "react";
import './Styles/Question.css'

const QuestionForm = () => {
    const [loggedUser, setLoggedUser] = useState({});

    const getUser = () => {
        if (localStorage.getItem('registered-user') != null) {
            const temp = JSON.parse(localStorage.getItem('registered-user'));
            setLoggedUser(temp.user.email)
            console.log(temp);
        }
        else if (localStorage.getItem('logged-user') != null) {
            const temp = JSON.parse(localStorage.getItem('logged-user'));
            setLoggedUser(temp.email)
            console.log(temp);
        }
    }
    return (
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="05326e0d-1a96-497c-afda-7d51d79350bf"></input>
            <div className="name">
                <div style={{display: "flex", justifyContent: "center"}}><p>Ваше ім'я</p></div>
                <input className="input-name" type="text" name="name" required/>
            </div>
            <div className="surname">
                <div style={{display: "flex", justifyContent: "center"}}><p>Ваше прізвище</p></div>
                <input className="input-surname" type="text" name="surname" required/>
            </div>
            <div className="enter-question">
                <div style={{display: "flex", justifyContent: "center"}}><p>Ваше питання</p></div>
                <textarea className="input-question" type="text" name="question" required/>
            </div>
            <input type="hidden" name="email" value={loggedUser}/>
            {localStorage.getItem('registered-user') || localStorage.getItem('logged-user') ? 
            <button className="ask-question-btn" onClick={getUser}>Задати питання</button>
        :
        <strong style={{fontSize: "20px", color: "red", paddingTop: "30px"}}>
            Ви не авторизовані! Будь ласка, увійдіть в систему!
        </strong>
        }
        </form>
    )
}
    

export default QuestionForm;