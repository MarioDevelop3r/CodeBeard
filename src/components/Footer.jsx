import Rrss from './Rrss.jsx';


const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="contenido-footer">
        {/* Información de Contacto */}
        <div className="footer-seccion">
          <h4>Contacto</h4>
          <p>Email: <a href="mailto:contacto@codebeard.com">contacto@codebeard.com</a></p>
          <p>Teléfono: <a href="tel:+34123456789">+34 123 456 789</a></p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-seccion">
          <h4>Enlaces Rápidos</h4>
          <ul className="enlaces">
            {["Inicio", "Sobre Nosotros", "Servicios", "Portafolio", "Contacto"].map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Políticas */}
        <div className="footer-seccion">
          <h4>Políticas</h4>
          <ul className="enlaces">
            {["Política de Privacidad", "Términos de Servicio"].map((policy, index) => (
              <li key={index}>
                <a href={`#${policy.toLowerCase().replace(/ /g, '-')}`}>{policy}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-seccion">
          <h4>Síguenos</h4>
          <Rrss />
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
