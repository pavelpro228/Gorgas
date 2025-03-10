import React from "react";
import QuestionForm from "./QuestionForm";
import FequentlyQuestions from "./FequentlyQuestions";

const Question = () => (
    <div className="question">
        <div className="frequently-questions">
            <FequentlyQuestions />
        </div>
        <div className="ask-question">
            <QuestionForm />
        </div>
    </div>
)

export default Question;