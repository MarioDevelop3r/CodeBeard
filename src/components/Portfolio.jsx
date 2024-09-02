const Portfolio = () => {
    const randomImages = [
        {
            url: "https://i.imgur.com/LPFx4mo.png",
            link: "https://twitercard.netlify.app/",
            title: "Twitter Cards",
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
            description: "Aplicación web que permite encriptar y desencriptar textos y funciones adicionales"
        },
        {
            url: "https://i.imgur.com/LPFx4mo.png",
            link: "https://twitercard.netlify.app/",
            title: "Twitter Cards",
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
            description: "Aplicación web que permite encriptar y desencriptar textos y funciones adicionales"
        },
 
        // Más proyectos...
    ];

    return (
        <section id="portafolio" className="portafolio">
            <div className="contenido-seccion">
                <h2>PORTAFOLIO</h2>
                <div className="galeria">
                    {randomImages.map((image, index) => (
                        <div className="proyecto" key={index}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer" aria-label={`Enlace a ${image.title}`}>
                                <img src={image.url} alt={image.description} loading="lazy" />
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


