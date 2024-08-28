

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
          <div className="col">
            <form>
              <label htmlFor="name">Tu Nombre</label>
              <input type="text" id="name" placeholder="Tu Nombre" required />
              
              <label htmlFor="phone">Número telefónico</label>
              <input type="tel" id="phone" placeholder="Número telefónico" required />
              
              <label htmlFor="email">Dirección de correo</label>
              <input type="email" id="email" placeholder="Dirección de correo" required />
              
              <label htmlFor="subject">Tema</label>
              <input type="text" id="subject" placeholder="Tema" required />
              
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" cols="30" rows="10" placeholder="Mensaje" required></textarea>
              
              <button type="submit" className="enviar-mensaje">
                Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


