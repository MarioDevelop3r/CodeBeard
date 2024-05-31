
import './home.css';  // Archivo CSS para estilos personalizados

const Home = () => {
  return (
    <section id="inicio" className="home-section">
      <div className="contenido-banner">
        <div className="imagen-banner">
          <img src="/public/klipartz.com.png" alt="CodeBeard" />
        </div>
        <div className="texto-banner">
          <h1>HI! I AM CODEBEARD</h1>
          <p>Construyo software excepcionalmente bueno.</p>
          <p>Mi principal experiencia es la creación de productos web seguros y escalables.</p>
          <a href="#portfolio" className="cta-button">Vamos</a>
        </div>
      </div>
    </section>
  );
};

export default Home;



