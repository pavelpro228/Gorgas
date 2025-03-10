import React, { useEffect, useState } from "react";
import './Styles/Question.css'

const FequentlyQuestions = () => {
    const [data, setData] = useState([]);

    const callBackendAPI = async () => {
        const response = await fetch('/api/questions');
        const body = await response.json();
        return body;
    };
    
      useEffect(() => {
        callBackendAPI()
          .then(res => setData(res));
      }, []);
    return (
    <>
        <h1>Часті запитання</h1>

        {data.length > 0 ?data.map((item, index) => (
          <p key={index}>{item.message}</p>
        ))
        :
        "Завантаження..."
      }
      
    </>
    )
}

export default FequentlyQuestions;