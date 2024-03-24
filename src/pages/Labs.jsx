import React from 'react';
import './Labs.css'; // Импортируем файл со стилями

const Labs = () => {
  return (
    <div className="labs-container">
      <h1 className="labs-title">Добро пожаловать в каталог лабораторных работ!</h1>
      <div className="subjects">
        <div className="subject">
          <h2 className="subject-title">Математика</h2>
          <select className="lab-select">
            <option value="">Выберите лабораторную работу</option>
            <option value="/labs/math/lab1.pdf">Лабораторная работа 1: Основы дифференциального исчисления</option>
            <option value="/labs/math/lab2.pdf">Лабораторная работа 2: Интегральные уравнения</option>
            <option value="/labs/math/lab3.pdf">Лабораторная работа 3: Линейная алгебра</option>
          </select>
        </div>
        <div className="subject">
          <h2 className="subject-title">Физика</h2>
          <select className="lab-select">
            <option value="">Выберите лабораторную работу</option>
            <option value="/labs/physics/lab1.pdf">Лабораторная работа 1: Механика</option>
            <option value="/labs/physics/lab2.pdf">Лабораторная работа 2: Электричество и магнетизм</option>
            <option value="/labs/physics/lab3.pdf">Лабораторная работа 3: Оптика</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Labs;
