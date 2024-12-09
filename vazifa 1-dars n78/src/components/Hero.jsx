
import React from "react";
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>The Best Future Stars - мы заботимся о будущем вашего ребенка</h1>
                <p>Наши опытные преподаватели сделают процесс обучения максимально интересным и эффективным для вашего ребенка.</p>
                <div className="hero-buttons">
                    <button className="call-btn">Позвонить</button>
                    <button className="details-btn">Подробнее</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="student.png" alt="Student with cap" />
            </div>
        </section>
    );
}

export default Hero;
