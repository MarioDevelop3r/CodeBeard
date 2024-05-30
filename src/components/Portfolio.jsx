import "../components/portfolio.css";

const Portfolio = () => {
    // Array de imágenes aleatorias
    const randomImages = [
        "https://via.placeholder.com/300/FF0000",
        "https://via.placeholder.com/300/00FF00",
        "https://via.placeholder.com/300/0000FF",
        "https://via.placeholder.com/300/FFFF00",
        "https://via.placeholder.com/300/00FFFF",
        "https://via.placeholder.com/300/FF00FF"
    ];

    return (
        <section id="portafolio" className="portafolio">
            <div className="contenido-seccion">
                <h2>PORTAFOLIO</h2>
                <div className="galeria">
                    {/* Mapeo de las imágenes aleatorias */}
                    {randomImages.map((image, index) => (
                        <div className="proyecto" key={index}>
                            <img src={image} alt={`Proyecto ${index + 1}`} />
                            <div className="overlay">
                                <h3>Diseño Creativo</h3>
                                <p>Fotografía</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;


