import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { GET_CHARACTERS } from "../store/character/thunk";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio/> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const { value: pageValue } = useAppSelector((state) => state.page)
    const { allCharacters} = useAppSelector((state) => state.characters)

  
       useEffect(() => {
        dispatch(GET_CHARACTERS({ dato: pageValue, parametro: 'page' }));

    
      }, [pageValue])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar Filtro</button>
        </div>
        <Filtros />
        <Paginacion pageValue={pageValue}/>    
       
        <GrillaPersonajes  initialCharacters={allCharacters}
/>
         <Paginacion pageValue={pageValue} />
    </div>
}


export default PaginaInicio