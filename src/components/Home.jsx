const Logo = "https://i.imgur.com/NVGqkb1.png";

const Home = () => {
  return (
    <section id="inicio" className="home-section">
      <div className="contenido-banner">
        <div className="imagen-banner">
          <img src={Logo} alt="Logo de CODEBEARD" /> {/* Imagen optimizada */}
        </div>
        <div className="texto-banner">
          <h1>CODEBEARD</h1>
          <h2>Nos especializamos en desarrollar software de calidad excepcional.</h2>
          <p>
            En CODEBEARD, nos enfocamos en crear productos web seguros y escalables,
            garantizando soluciones digitales innovadoras que crecen con tu negocio.
            Creamos plataformas robustas que resisten amenazas digitales y mantienen
            un rendimiento óptimo en alta demanda. Trabajamos estrechamente con nuestros
            clientes para ofrecer soluciones personalizadas que impulsan su éxito en línea.
          </p>
          <p>
            Ofrecemos productos que superan las exigencias de seguridad y escalabilidad,
            brindando la confianza necesaria para crecer en el entorno digital actual.
            Contáctanos para hablar sobre tu próximo proyecto digital.
          </p>
          <a href="#portafolio" className="cta-button">
            Vamos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;




