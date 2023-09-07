import {FC} from 'react';
import './paginacion.css';
import { IPaginacion } from './paginacion.interface';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({anterior, siguiente}: IPaginacion) => {

    return <div className="paginacion">
        <button disabled={!anterior} className={"primary"}>Anterior</button>
        <button disabled={!siguiente} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;