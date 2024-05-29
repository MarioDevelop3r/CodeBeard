import { useEffect } from 'react';
import "../App.css";    


const CallbellScript = ({ token }) => {
  useEffect(() => {
    const loadCallbellScript = () => {
      // Verificar si ya existe el objeto window.Callbell
      if (typeof window.Callbell === "function") {
        window.Callbell('reattach_activator');
        window.Callbell('update', window.callbellSettings);
      } else {
        // Definir la función para Callbell y cargar el script
        const d = document;
        const i = function () { i.c(arguments) };
        i.q = [];
        i.c = function (args) { i.q.push(args) };
        window.Callbell = i;
        const l = function () {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = `https://dash.callbell.eu/include/${token}.js`;
          const x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        // Adjuntar el evento onload para cargar el script
        if (window.attachEvent) {
          window.attachEvent('onload', l);
        } else {
          window.addEventListener('load', l, false);
        }
      }
    };

    loadCallbellScript();

    // Cleanup para asegurar que no haya fugas de memoria
    return () => {
      delete window.Callbell;
    };
  }, [token]);

  return null; // El componente no renderiza nada en la interfaz
};

export default CallbellScript;

