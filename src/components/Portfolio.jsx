import "../components/portfolio.css";

const Portfolio = () => {
    // Array de imágenes aleatorias
    const randomImages = [
        "https://via.placeholder.com/300/FF5733/FFFFFF",
        "https://via.placeholder.com/300/33FF57/FFFFFF",
        "https://via.placeholder.com/300/5733FF/FFFFFF",
        "https://via.placeholder.com/300/FF33E9/FFFFFF",
        "https://via.placeholder.com/300/33E9FF/FFFFFF",
        "https://via.placeholder.com/300/E9FF33/FFFFFF"
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


