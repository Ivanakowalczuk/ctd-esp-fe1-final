import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { GET_CHARACTERS } from "../store/character/thunk";
import { CLEAN_ALL_FAVORITOS } from "../store/character/slice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const { listFavoritos, urlBase} = useAppSelector((state) => state.characters)
   
    const deleteFavoritos = () => {
       dispatch(CLEAN_ALL_FAVORITOS())
    }
    useEffect(() => {
        dispatch(GET_CHARACTERS(urlBase));
      }, [])
   
   return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button onClick={deleteFavoritos} className="danger">Limpiar Favoritos</button>
        </div>
        <GrillaPersonajes initialCharacters={listFavoritos} /> 
    </div>
}

export default PaginaFavoritos