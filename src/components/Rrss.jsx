

const Rrss = () => {
    const userRss = [
        { name: 'github', url: 'https://github.com/MarioDevelop3r' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/mario-rojas-0990a9182/' }
    ];

    const icons = [
        { name: 'github', src: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" },
        { name: 'linkedin', src: "https://img.icons8.com/?size=100&id=114445&format=png&color=000000" }
    ];

    return (
        <div className="redes">
            {icons.map((icon, index) => {
                // Encuentra la URL correspondiente en userRss
                const rssUrl = userRss.find(rss => rss.name === icon.name)?.url;
                return (
                    <a href={rssUrl} key={index} target="_blank" rel="noopener noreferrer" aria-label={icon.name}>
                        <img src={icon.src} alt={icon.name} />
                    </a>
                );
            })}
        </div>
    );
}

export default Rrss;




