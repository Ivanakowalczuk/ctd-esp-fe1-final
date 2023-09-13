import './boton-favorito.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { ADD_FAVORITOS } from '../../store/character/slice';
import { ICharacter } from '../../interface/character.interface';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito,  id, name, image }: ICharacter) => {
    const dispatch = useAppDispatch()
    const {isError, isLoading, listFavoritos, allCharacters} = useAppSelector((state) => state.characters)
  

       
/**
 * Dispara la acción de Agregar a favoritos
 * @author 'Ivana Kowalczuk'
 * @return {Array} un array de favoritos
 */ 
    const addFavorito = () => {
        console.log('Botón Favorito clickeado');
        dispatch(ADD_FAVORITOS( {esFavorito,  id, name, image} ));
      }
      const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={addFavorito} />
    </div>
}

export default BotonFavorito;