// ChatBox.jsx
import { useState } from 'react';
import './Chatbox.css';
import whatsappIcon from '../assets/img/whatsapp.png';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
      <div className={`whatsapp-button ${isOpen ? 'open' : ''}`} onClick={toggleChatBox}>
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </div>
      {isOpen && (
        <div className="chatbox-content">
          {/* Aquí colocarás el contenido del chat, como mensajes, entrada de texto, etc. */}
          <div className="message-container">
            {/* Mensajes */}
          </div>
          <div className="input-container">
            <input type="text" placeholder="Escribe tu mensaje aquí..." />
            {/* Puedes eliminar este botón si deseas que la única forma de cerrar sea haciendo clic en el botón de WhatsApp */}
            <button onClick={toggleChatBox}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;

