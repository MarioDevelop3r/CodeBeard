# Sitio Personal en Construcción

Este es un sitio web personal que actualmente está en construcción. El objetivo de este sitio es presentar un portafolio, información de contacto y otros detalles relevantes sobre mí.

## Tecnologías Utilizadas

- React
- React Router DOM

## Estructura del Proyecto

El proyecto se estructura en varios componentes, cada uno con una función específica:

- **Header**: Encabezado del sitio.
- **Home**: Página principal.
- **Portfolio**: Sección que muestra el portafolio.
- **Contact**: Sección de contacto.
- **Footer**: Pie de página.
- **Whatsapp**: Componente para la integración de WhatsApp.

## Código Principal

El siguiente es el código principal del proyecto, que integra todos los componentes mencionados:

```javascript
import { BrowserRouter as Router } from 'react-router-dom';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Whatsapp from './components/Whatsapp';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Router>
        <Whatsapp />
        <div>
          <Header />
          <Home />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
