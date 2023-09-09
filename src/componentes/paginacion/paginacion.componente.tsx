import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { DECREMENT_PAGE, INCREMENT_PAGE } from '../../store/paginacion/slice';
import { IPaginacion } from './paginacion.interface';
import { useEffect } from 'react';
import { GET_CHARACTERS } from '../../store/character/thunk';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({pageValue} : IPaginacion) => {
    const dispatch = useAppDispatch()

    return <div className="paginacion">
        <button onClick={()=> dispatch(DECREMENT_PAGE())} className={"primary"}>Anterior</button>
        <span>Página {pageValue} </span>
        <button onClick={()=>dispatch(INCREMENT_PAGE())} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;