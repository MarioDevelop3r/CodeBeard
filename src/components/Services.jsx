
const Servicios = () => {
    const servicios = [
        {
            title: "Análisis Predictivo",
            description: "Transforma tus datos en insights estratégicos con nuestro análisis predictivo. Utilizando modelos de inteligencia artificial, anticipamos tendencias y comportamientos futuros, permitiéndote tomar decisiones informadas y proactivas. ¡Potencia tu negocio con previsibilidad!",
        },
        {
            title: "Visualización Interactiva de Datos",
            description: "Convierte datos complejos en historias visuales. Nuestra plataforma de visualización interactiva te permite explorar tus datos a través de gráficos dinámicos y tableros intuitivos, facilitando la comprensión y el análisis en tiempo real. ¡Haz que tus datos hablen!",
        },
        {
            title: "Optimización de Procesos con IA",
            description: "Maximiza la eficiencia operativa con soluciones de inteligencia artificial que analizan tus procesos actuales. Identificamos áreas de mejora y te ayudamos a implementar cambios que optimicen recursos, reduciendo costos y mejorando la productividad.",
        },
        {
            title: "Desarrollo de Modelos de Machine Learning",
            description: "Creamos modelos de machine learning personalizados que se adaptan a tus necesidades específicas. Desde la clasificación hasta la regresión, nuestros expertos en IA trabajan contigo para desarrollar soluciones que impulsan el rendimiento de tu negocio y mejoran la toma de decisiones.",
        },
        {
            title: "Consultoría en Estrategia de Datos",
            description: "Te guiamos en la creación de una estrategia de datos robusta. Desde la recopilación hasta el almacenamiento y análisis, nuestro equipo te ayudará a implementar prácticas que conviertan tus datos en un activo valioso para tu empresa.",
        },
        {
            title: "Automatización de Informes y Dashboards",
            description: "Olvídate de los informes manuales. Automatizamos la generación de informes y dashboards que se actualizan en tiempo real, permitiéndote tener una visión clara y precisa del rendimiento de tu negocio en todo momento.",
        },
    ];

    return (
        <section className="servicios">
            <div className="contenido-seccion">
                <h2>Servicios</h2>
                <div className="fila">
                    {servicios.map((servicio, index) => (
                        <div className="col" key={index}>
                            <div className="servicio">
                                <h3>{servicio.title}</h3>
                                <p>{servicio.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
