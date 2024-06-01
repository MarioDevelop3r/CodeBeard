import "../components/portfolio.css";

const Portfolio = () => {
    // Array de imágenes aleatorias
    const randomImages = [
        "https://picsum.photos/300?random=1",
        "https://picsum.photos/300?random=2",
        "https://picsum.photos/300?random=3",
        "https://picsum.photos/300?random=4",
        "https://picsum.photos/300?random=5",
        "https://picsum.photos/300?random=6"
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


