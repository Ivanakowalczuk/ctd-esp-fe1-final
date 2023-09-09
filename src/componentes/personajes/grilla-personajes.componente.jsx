import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { GET_CHARACTERS } from '../../store/character/thunk';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
  
    const { allCharacters, isError, isLoading} = useAppSelector((state) => state.characters)
   
    const ref = useRef<HTMLInputElement>(null)
    
    
    return <div className="grilla-personajes">
         {isLoading ? <p>Loading...</p> :
            allCharacters.results.map(character =>
                <TarjetaPersonaje nombre={character.name} imagenUrl={character.image} />
           )}
          {isError && <p>{isError}</p>}


    
      
    </div>
}
 
export default GrillaPersonajes;