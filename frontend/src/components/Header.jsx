import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <nav>
        <Link to="/" className='logo'><span alt='logo'>Мастерская Ванных</span></Link>
        <ul className="header-liss">
          <li className='nav-item'><Link to="/">Главная</Link></li>
          <li className='nav-item'><Link to="/about">О нас</Link></li>
          <li className='nav-item'><Link to="/contacts">Контакты</Link></li>
          <li className='nav-item'><Link to="/uslugi">Услуги</Link></li>
          <li className='nav-item'><Link to="/calculator">Расчет услуг</Link></li>
          <li className='nav-item'><Link to="/blog">Блог</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
