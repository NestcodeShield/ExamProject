import { useState,useEffect } from "react";
import Header from "../components/Header";
import React from "react";
import './Uslugi.css'
function Uslugi() {

  return (
    
    <div className="Uslugi">
      <h2>Наши услуги</h2>
      <section>
        <div>
          <span>Демонтаж</span>
          <p>Примеры работ:</p>
          <ul>
            <li>Снятие старой плитки</li>
            <li>Демонтаж ванны</li>
            <li>Удаление старых труб</li>
          </ul>
          <p>Цена: от 50 до 100 рублей за квадратный метр (в зависимости от сложности).</p>
        </div>
          
        <div>
          <span>Укладка плитки</span>
          <p>Примеры работ:</p>
          <ul>
            <li>Укладка плитки на пол</li>
            <li>Создание плиточных панно на стенах</li>
          </ul>
          <p>Цена: от 800 до 1500 рублей за квадратный метр (в зависимости от типа плитки и сложности укладки).</p>
        </div>

        <div>
          <span>Сантехнические работы </span>
          <p>Примеры работ:</p>
          <ul>
            <li>Установка унитаза</li>
            <li>Раковины</li>
            <li>Душевые кабины</li>
            <li>Замена старых труб</li>
          </ul>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Uslugi;
