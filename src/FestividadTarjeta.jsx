import React, { useState } from 'react'; 

const FestividadTarjeta = ({ festividad, alCambiarFavorito }) => {
    const [contadorClics, setContadorClics] = useState(0);
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    const manejarClicTarjeta = () => {
        setContadorClics(prevContador => prevContador + 1);
        setMostrarDetalles(prevMostrarDetalles => !prevMostrarDetalles);
    };

    const manejarClicFavorito = (e) => {
        e.stopPropagation();
        alCambiarFavorito(festividad.id);
    };

    return (
        <div className="tarjeta-festividad" onClick={manejarClicTarjeta}>
            {festividad.imagen && (
                <img
                    src={festividad.imagen} 
                    alt={`Imagen de ${festividad.nombre}`} 
                    className="imagen-festividad" 
                />
            )}
            <div className="contenido-tarjeta">
                <h2>{festividad.nombre}</h2> 
                <p><strong>Provincia:</strong> {festividad.provincia}</p> 
                <p><strong>Fechas:</strong> {festividad.fechas}</p> 

                {mostrarDetalles && (
                    <div className="detalles-vista">
                        <p><strong>Descripción:</strong> {festividad.descripcion}</p> 
                    </div>
                )}

                <button
                    className={`boton-favorito ${festividad.esFavorita ? 'es-favorita' : ''}`}
                    onClick={manejarClicFavorito} 
                >
                    {festividad.esFavorita ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                </button>

                <div className="contador-clics">
                    Clics: {contadorClics}
                </div>
            </div>
        </div>
    );
};

export default FestividadTarjeta; 