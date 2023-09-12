import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';

import { GET_CHARACTERS } from '../../store/character/thunk';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const {nextPage, prevPage} = useAppSelector((state)=> state.characters)

    const handelNextPage = () =>{
       dispatch(GET_CHARACTERS(nextPage))
    }
    const handelPrevPage = () =>{
        dispatch(GET_CHARACTERS(prevPage))
     }
    return <div className="paginacion">
       
        <button onClick={handelPrevPage} disabled={!prevPage} className={"primary"}>Anterior</button>
         <button onClick={handelNextPage} disabled={!nextPage} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;