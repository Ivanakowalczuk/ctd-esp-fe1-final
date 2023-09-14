import { useEffect, useRef } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../store';
import {  GET_CHARACTERS, GET_CHARACTERS_FILTER} from '../../store/character/thunk';
import { IFiltros } from './personajes.interface';
import { IAllCharacters } from '../../interface/character.interface';


const Filtros = ({name, setName, urlBase} : IFiltros) => {
    const ref = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()
   
   
    /**
 * Borra filtro de búsqueda por nombre y vuelve a disparar la acción GET_CHARACTERS.
 * @author 'Ivana Kowalczuk'
 * @return {string} retorna un string vacío para darle valor vacío al value del input al que se refiere el useRef
 */
    const deleteFilter = ()=>{
      if (!ref.current) return
      ref.current.value = ''
      dispatch(GET_CHARACTERS(urlBase))

}
   
/**
 * Filtra por nombre disparando la acción GET_CHARACTERS_FILTER
 * @author 'Ivana Kowalczuk'
 * @return {IAllCharacters} retorna un array de personajes filtrados por el nombre
 */ 
    const filterByName  = ()  => {
      if (!ref.current) return
     setName(ref.current.value)
      if (name?.trim === null) {
        ref.current.value = '' 
        return
      }
     console.log(name)
    dispatch(GET_CHARACTERS_FILTER({name}))  
   
     }
    
     useEffect(() => {
     if(name === null){
      deleteFilter()
     } 
    }, [name]);

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" ref={ref} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={filterByName}/>
    </div>
}

export default Filtros;