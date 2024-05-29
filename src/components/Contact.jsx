 import "../components/Chatbox.css";
 import Registration from "./Registration";
 
const Contact = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
        <div className="col">
         <Registration />
          </div>
          {/* Formulario */}
          <div className="col">
            <input type="text" placeholder="Tú Nombre" />
            <input type="text" placeholder="Número telefónico" />
            <input type="text" placeholder="Dirección de correo" />
            <input type="text" placeholder="Tema" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
          </div>
          {/* Whatsapp */}
         
        </div>
      </div>
            <button>
              Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
    </section>
  );
};

export default Contact;

