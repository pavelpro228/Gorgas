import React from "react";
import './Styles/Main.css'
import backgroundImage from './Images/backgrounds.jpg';

const Main = () => {
  return (
    <div className="home">
      <section className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Надійний постачальник природного газу</h1>
        <p>Стабільні тарифи, якість та безпека</p>
        <button className="primary-button">Дізнатися більше</button>
      </section>

      <section className="container">
        <h2 className="section-title">Наші переваги</h2>
        <div className="grid">
          {[
            { title: "Стабільність", text: "Безперервне постачання природного газу" },
            { title: "Доступні тарифи", text: "Прозорі умови та вигідні ціни" },
            { title: "Цілодобова підтримка", text: "Консультації 24/7 для наших клієнтів" },
          ].map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Наші послуги</h2>
        <div className="grid">
          {[
            { title: "Підключення", text: "Швидке та надійне підключення до мережі" },
            { title: "Обслуговування", text: "Регулярні перевірки та ремонт обладнання" },
            { title: "Консультації", text: "Допомога у виборі оптимального тарифу" },
          ].map((service, index) => (
            <div key={index} className="card gray-background">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button className="outline-button">Детальніше</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;