import "../components/portfolio.css";

const Portfolio = () => {
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
            description: "Consumo de API"
        },
        {
            url: "https://picsum.photos/300?random=3",
            link: "https://deploy-preview-1--sprightly-naiad-41d974.netlify.app/",
            title: "Encriptador de texto - Alura Challenges ONE",
            description: "aplicación web que permite encriptar y desencriptar textos y funciones adicionales"
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
                    {randomImages.map((image, index) => (
                        <div className="proyecto" key={index}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer" aria-label={image.title}>
                                <img src={image.url} alt={image.description} />
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

