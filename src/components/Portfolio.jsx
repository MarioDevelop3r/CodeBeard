import "../components/portfolio.css";

const Portfolio = () => {
    // Array de imágenes aleatorias con enlaces y descripciones
    const randomImages = [
        { 
            url: "https://i.imgur.com/LPFx4mo.png", 
            link: "https://twitercard.netlify.app/", 
            title: "Twitwer Cards", 
            description: "Diseño de tarjetas de Twitter" 
        },
        { 
            url: "https://i.imgur.com/8iShEQm.png", 
            link: "https://rick-morty-app-api.netlify.app/", 
            title: "Rick & Morty API", 
            description: "Consumo de API"},
        { 
            url: "https://picsum.photos/300?random=3", 
            link: "https://example.com/project3", 
            title: "Diseño Creativo 3", 
            description: "Fotografía 3" 
        },
        { 
            url: "https://picsum.photos/300?random=4", 
            link: "https://example.com/project4", 
            title: "Diseño Creativo 4", 
            description: "Fotografía 4" 
        },
        { 
            url: "https://picsum.photos/300?random=5", 
            link: "https://example.com/project5", 
            title: "Diseño Creativo 5", 
            description: "Fotografía 5" 
        },
        { 
            url: "https://picsum.photos/300?random=6", 
            link: "https://example.com/project6", 
            title: "Diseño Creativo 6", 
            description: "Fotografía 6" 
        }
    ];

    return (
        <section id="portafolio" className="portafolio">
            <div className="contenido-seccion">
                <h2>PORTAFOLIO</h2>
                <div className="galeria">
                    {/* Mapeo de las imágenes aleatorias */}
                    {randomImages.map((image, index) => (
                        <div className="proyecto" key={index}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                <img src={image.url} alt={`Proyecto ${index + 1}`} />
                                <div className="overlay">
                                    <h3>{image.title}</h3>
                                    <p>{image.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
