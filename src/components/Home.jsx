import './home.css';  // Archivo CSS para estilos personalizados

const Logo = 
  "https://i.imgur.com/NVGqkb1.png"


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
          <p>En CODEBEARD, nos especializamos en el diseño y desarrollo de productos web que priorizan la seguridad y la escalabilidad. Con un enfoque centrado en la excelencia técnica, nuestro equipo está comprometido en ofrecer soluciones digitales innovadoras que no solo cumplen con los más altos estándares de seguridad, sino que también están diseñadas para crecer con tu negocio.</p>

<p>Nuestra experiencia se basa en la creación de plataformas robustas que resisten las amenazas digitales más sofisticadas, al tiempo que garantizan un rendimiento óptimo incluso en entornos de alta demanda. Desde la conceptualización hasta la implementación y más allá, trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades únicas y ofrecer soluciones personalizadas que impulsen su éxito en línea.</p>

<p>En un mundo digital cada vez más complejo y competitivo, la seguridad y la escalabilidad son fundamentales. En CODEBEARD, nos enorgullecemos de ofrecer productos que no solo cumplen con estas exigencias, sino que las superan, brindando a nuestros clientes la tranquilidad y la confianza necesarias para hacer crecer sus negocios de manera sostenible en el panorama digital actual.</p>

<p>Descubre cómo podemos ayudarte a alcanzar tus objetivos en línea de manera segura y escalable. Contáctanos hoy mismo para iniciar una conversación sobre tu próximo proyecto digital.</p>
          <a href="#portafolio" className="cta-button">Vamos</a>
        </div>
      </div>
    </section>
  );
};

export default Home;



