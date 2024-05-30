import Rrss from './Rrss.jsx';
import './footer.css';  // Asegúrate de crear y ajustar este archivo CSS según tus necesidades

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="contenido-footer">
        {/* Información de Contacto */}
        <div className="footer-seccion">
          <h4>Contacto</h4>
          <p>Email: contacto@codebeard.com</p>
          <p>Teléfono: +34 123 456 789</p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-seccion">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Políticas */}
        <div className="footer-seccion">
          <h4>Políticas</h4>
          <ul>
            <li><a href="#politica-privacidad">Política de Privacidad</a></li>
            <li><a href="#terminos-servicio">Términos de Servicio</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-seccion">
          <h4>Síguenos</h4>
          <Rrss />
        </div>

        {/* Créditos o Derechos de Autor */}
        <div className="footer-seccion">
          <p>&copy; 2024 CodeBeard. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

