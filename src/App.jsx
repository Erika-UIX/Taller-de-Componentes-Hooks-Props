import React, { useState } from 'react';
import FestividadTarjeta from './FestividadTarjeta.jsx';
import Footer from './Footer.jsx'; // Importa el nuevo componente Footer
import './App.css';

function App() {
    const [festividades, setFestividades] = useState([
        {
            id: 1,
            nombre: "Inti Raymi",
            provincia: "Imbabura, Pichincha, Azuay, Cañar",
            descripcion: "Fiesta del Sol, celebrada por los pueblos andinos en agradecimiento a la Pachamama por la cosecha. Es una de las festividades más importantes en la cosmovisión andina, marcada por rituales ancestrales, música, danza y ofrendas a la naturaleza.",
            fechas: "Junio (solsticio de verano)",
            esFavorita: false,
            imagen: "/imagenes/inti-raymi.jpg"
        },
        {
            id: 2,
            nombre: "Carnaval de Guaranda",
            provincia: "Bolívar",
            descripcion: "Uno de los carnavales más famosos de Ecuador, conocido por su desfile del Taita Carnaval, carros alegóricos, comparsas, y el tradicional juego con agua, espuma de carnaval y polvo de colores, reflejando la alegría y la cultura de la región.",
            fechas: "Febrero o Marzo (variable, antes de la Cuaresma)",
            esFavorita: false,
            imagen: "/imagenes/carnaval-guaranda.jpg"
        },
        {
            id: 3,
            nombre: "Diablada de Píllaro",
            provincia: "Tungurahua",
            descripcion: "Una celebración ancestral donde personajes disfrazados de diablos, guarabos y otros seres míticos, danzan en un recorrido por las calles. Es una expresión cultural que combina elementos indígenas, coloniales y afroecuatorianos, creando un espectáculo vibrante.",
            fechas: "1 al 6 de Enero",
            esFavorita: false,
            imagen: "/imagenes/diablada-pillaro.jpg"
        },
        {
            id: 4,
            nombre: "Fiesta de la Mama Negra",
            provincia: "Cotopaxi",
            descripcion: "Homenaje a la Virgen de la Merced, donde un personaje principal, la 'Mama Negra', recorre las calles en un desfile lleno de música, danza y coloridos personajes. Representa la diversidad cultural de la región y la devoción popular.",
            fechas: "Septiembre (Latacunga) y Noviembre (Fiesta de Independencia de Latacunga)",
            esFavorita: false,
            imagen: "/imagenes/mama-negra.jpg"
        },
        {
            id: 5,
            nombre: "Día de los Difuntos",
            provincia: "Nacional",
            descripcion: "Tradición profundamente arraigada donde las familias visitan los cementerios para honrar a sus seres queridos fallecidos. Es común compartir la 'colada morada' (una bebida a base de frutas y harina de maíz morado) y 'guaguas de pan' (panes con forma de niños o personas), simbolizando la unión familiar y el respeto a los antepasados.",
            fechas: "2 de Noviembre",
            esFavorita: false,
            imagen: "/imagenes/dia-difuntos.jpg"
        },
        {
            id: 6,
            nombre: "Fiesta de la Chonta",
            provincia: "Amazonía",
            descripcion: "Una tradición amazónica que se celebra en abril y se ha extendido a otras comunidades de la región. simboliza el agradecimiento a la naturaleza por la abundancia de alimentos y la renovación del ciclo agrícola de la chonta.",
            fechas: "Varía según la comunidad.",
            esFavorita: false,
            imagen: "/imagenes/fiesta-chonta.jpg"
        } 
    ]);

    const alternarFavorito = (id) => {
        setFestividades(prevFestividades =>
            prevFestividades.map(festividad =>
                festividad.id === id
                    ? { ...festividad, esFavorita: !festividad.esFavorita }
                    : festividad
            )
        );
    };

    return (
        <div>
            <header className="encabezado-principal">
                <img
                    src="/logo-ecuador-fiestas.png"
                    alt="Logo Festividades Ecuador"
                    className="logo-sitio"
                />
                <h1>FESTIVIDADES DEL ECUADOR</h1>
            </header>

            <div className="festividades-contenedor">
                {festividades.map(festividad => (
                    <FestividadTarjeta
                        key={festividad.id}
                        festividad={festividad}
                        alCambiarFavorito={alternarFavorito}
                    />
                ))}
            </div>

            {/* Renderiza el componente Footer aquí */}
            <Footer />
        </div>
    );
}

export default App;
