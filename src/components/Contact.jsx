import "../components/Chatbox.css";

const Contact = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <div className="contacto-content">
              <h1>Lleva tu idea al siguiente nivel.</h1>
              <div>
                <p>En CodeBeard, estamos comprometidos a maximizar el potencial de las tecnologías avanzadas. Nuestro equipo de expertos en desarrollo está listo para transformar tus ideas en realidades digitales innovadoras. Nos especializamos en soluciones personalizadas que superan tus expectativas.</p>
                <p>Contáctanos para conversar sobre tu proyecto y descubrir cómo podemos llevarlo al siguiente nivel. Queremos entender tus necesidades y objetivos para ofrecerte la mejor estrategia. Déjanos tu información y nos pondremos en contacto contigo muy pronto para iniciar esta emocionante aventura juntos.</p>
              </div>
            </div>
          </div>
          {/* Formulario */}
          <div className="col">
            <input type="text" placeholder="Tu Nombre" />
            <input type="text" placeholder="Número telefónico" />
            <input type="text" placeholder="Dirección de correo" />
            <input type="text" placeholder="Tema" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
          </div>
        </div>
        <button className="enviar-mensaje">
          Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  );
};

export default Contact;

