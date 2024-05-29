
import '../App.css';
import whatsappIcon from '../App.css';

const Whatsapp = () => {
  return (
    <div className="whatsapp-button" aria-label="Contact us on WhatsApp">
      <a 
        href="https://wa.me/56955163539" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Contact us on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Whatsapp;


