

const Rrss = () => {
    const userRss= [
        { name: 'facebook', url: 'https://www.facebook.com/donMarioxD'},
        { name: 'instagram', url: 'https://www.instagram.com/rojasmario/'},
        { name: 'github', url: 'https://github.com/MarioDevelop3r'},
        { name: 'linkedin', url: 'https://www.linkedin.com/in/mario-rojas-0990a9182/'},
        { name: 'youtube', url: ''}
    ];

    const icons = [
        { name: 'facebook', src: "https://img.icons8.com/?size=100&id=3U3uC2N2yrSr&format=png&color=000000" },
        { name: 'instagram', src: "https://img.icons8.com/?size=100&id=ms3ftPftW1cW&format=png&color=000000"  },
        { name: 'github', src: "https://img.icons8.com/?size=100&id=zehXPLJSAbBB&format=png&color=000000"  },
        { name: 'linkedin', src: "https://img.icons8.com/?size=100&id=Ceo5wAFAEmmf&format=png&color=000000"  },
        { name: 'youtube', src: "https://img.icons8.com/?size=100&id=1oacwQbZsiyi&format=png&color=000000"}
    ];

    return (
        <div className="redes">
            {icons.map((icon, index) => {
                // Encuentra la URL correspondiente en userRss
                const rssUrl = userRss.find(rss => rss.name === icon.name)?.url;
                return (
                    <a href={rssUrl} key={index}>
                        <img src={icon.src} alt={icon.name} />
                    </a>
                );
            })}
        </div>
    );
}

export default Rrss;



