import { useState } from 'react';
import './header.css'; // Importa los estilos desde un archivo CSS

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const mostrarOcultarMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const seleccionar = () => {
        setMenuVisible(false);
    };

    return (
        <div className='contenedor-header'>
            <header>
                <div className="logo">
                    <a href="#">CODEBEARD</a>
                </div>
                <nav id="nav" className={menuVisible ? 'responsive' : ''}>
                    <ul>
                        <li><a href="#inicio" onClick={seleccionar}>SERVICIOS</a></li>
                        <li><a href="#portafolio" onClick={seleccionar}>PORTAFOLIO</a></li>
                        <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
                    </ul>
                </nav>
                <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
        </div>
    );
};

export default Header;


