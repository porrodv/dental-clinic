import { useState, useEffect } from 'react';
import './styles.css';

export default function Navbar () {
  const [isSticky, setIsSticky] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // añade el evento al renderizar el componente
    window.addEventListener('scroll', handleScroll);

    // elimina el evento cuando cuando se deja de renderizar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
  };

  const handleClick = () => {
    setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
  };

  return (
    <>
      {/* renderizado condicional de la clase */}
      <nav className={`navbar ${isSticky ? 'sticky' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className='left'>
          <div className='navbar__logo'>
            <img src='../../public/dental_logo.png' alt='dental logo' />
          </div>
        </div>
        <div className='right'>
          <ul className='navbar__links'>
            <li className='navbar__link'>
              <a href='#'>Inicio</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Nosotros</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Servicios</a>
            </li>
            <li className='navbar__link'>
              <a href='#'>Contacto</a>
            </li>
            <li>
              <a href='#' id='navbar__reserve-btn' type='button'>
                Reservar
              </a>
            </li>
          </ul>
        </div>

        <button
          id='navbar__toggler'
          typeof='button'
          title='navbar__toggler-btn'
          onClick={handleClick}
        >
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
        </button>
      </nav>
    </>
  );
}
