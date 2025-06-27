import { useState,useEffect, use } from "react";
import React from "react";
import './Contacts.css'

function Contacts() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('');

  const user = {
  name,
  email,
  phone,
  message
  };

  function hundleSubmit () {
    if (!name || !email || !phone || !message) {
       alert('Заполните все поля') 
    } else {
       console.log(user)
       alert('Сообщение отправлено')
    }
  }
  

  return (
    
    <div className="Contacts">
      <div className="contact-information">
        <ul>
          <li><strong>Адрес:</strong> г. Москва, ул. Молодежная, 11, к. 15</li>
          <li><strong>Телефон:</strong> (912) 00-55-000</li>
          <li><strong>email:</strong> mastervann@mail.ru</li>
        </ul>
      </div>
      <form className="contact-form">
        <div>
            <label>Ваше имя</label>
              <input type="text"
                     value={name}           
                     onChange={(e) => setName(e.target.value)}/>
            <label>Email</label>
              <input type="text"
                     value={email}           
                     onChange={(e) => setEmail(e.target.value)}/>
            <label>Телефон</label>
              <input type="number"
                     value={phone}           
                     onChange={(e) => setPhone(e.target.value)}/>
            <label   
            >Ваше сообщение</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button onClick={hundleSubmit}>Отправить</button>
      </form>
    </div>
  );
}

export default Contacts;
