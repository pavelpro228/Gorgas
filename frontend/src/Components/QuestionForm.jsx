import React from "react";
import './Styles/Question.css'

const QuestionForm = () => (
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
        <input type="hidden" name="email" value="myemail@gmail.com"/>
        <button className="ask-question-btn">Задати питання</button>
    </form>
)

export default QuestionForm;