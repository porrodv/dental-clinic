import './styles.css';

export default function Navbar () {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar__links'>
          <li className='navbar__link'>
            <a href='index.jsp'>Inicio</a>
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
          <li id='contact-btn'>
            <button><a href='#'>Reservar</a>
            </button>
          </li>
        </ul>

        <button
          className='navbar__toggler'
          typeof='button'
          title='navbar__toggler-btn'
        >
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
        </button>
      </nav>
    </>
  );
}
