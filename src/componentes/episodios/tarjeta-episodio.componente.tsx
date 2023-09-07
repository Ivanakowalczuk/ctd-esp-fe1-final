import {FC} from 'react';
import { Episodio } from './tarjeta-episodios.interface';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */



const TarjetaEpisodio: FC<Episodio> = ({nombre, numeroDeEpisodio, fechaDeLanzamiento}) => {
    const fechaString = fechaDeLanzamiento.toLocaleDateString();
    return <div className="tarjeta-episodio">
            <h4>{nombre}</h4>
            <div>
                <span>{numeroDeEpisodio}</span>
                <span>Lanzado el: {fechaString}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;