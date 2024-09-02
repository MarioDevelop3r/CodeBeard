import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="contenido-footer">
        {/* Redes Sociales */}
        <div className="footer-seccion redes-sociales">
          <h4>Síguenos</h4>
          <div className="redes">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Créditos o Derechos de Autor */}
      <div className="footer-derechos">
        <p>&copy; 2024 CodeBeard. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

