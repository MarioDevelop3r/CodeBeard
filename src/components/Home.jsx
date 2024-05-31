import './home.css';  // Archivo CSS para estilos personalizados

const Logo = [
  "/public/klipartz.com.svg"
] // Definir la ruta de la imagen como una constante

const Home = () => {
  return (
    <section id="inicio" className="home-section">
      <div className="contenido-banner">
        <div className="imagen-banner">
          <img src={Logo} alt="CodeBeard" /> {/* Utilizar la constante para la ruta de la imagen */}
        </div>
        <div className="texto-banner">
          <h1>CODEBEARD</h1>
          <p>Nos especializamos en desarrollar software de calidad excepcional.</p>
          <p>Mi principal experiencia es la creación de productos web seguros y escalables.</p>
          <a href="#portafolio" className="cta-button">Vamos</a>
        </div>
      </div>
    </section>
  );
};

export default Home;



