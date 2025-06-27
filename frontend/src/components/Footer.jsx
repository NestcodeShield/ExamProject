import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className="Footer">
        <ul className="header-liss">
          <li className='nav-item'><Link to="/">Главная</Link></li>
          <li className='nav-item'><Link to="/about">О нас</Link></li>
          <li className='nav-item'><Link to="/contacts">Контакты</Link></li>
          <li className='nav-item'><Link to="/uslugi">Услуги</Link></li>
          <li className='nav-item'><Link to="/calculator">Расчет услуг</Link></li>
        </ul>
    </div>
  );
}

export default Footer;
