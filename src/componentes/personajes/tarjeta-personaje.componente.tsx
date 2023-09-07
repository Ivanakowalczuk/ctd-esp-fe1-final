import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {ITarjetaPersonaje}  from './grilla-personajes.interface'

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({nombre, imagenUrl, esFavorito }: ITarjetaPersonaje) => {
    return <div className="tarjeta-personaje">
        <img src={imagenUrl} alt={nombre}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={esFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;