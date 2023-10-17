import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { IEpisodio } from "../componentes/episodios/tarjeta-episodios.interface";
import { useEffect } from "react";
import { GET_CHARACTER_ID } from "../store/character/thunk";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import characterID from "../store/character/sliceOneCharacter";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const dispatch = useAppDispatch()
    const { character} = useAppSelector((state) => state.characterByID)
    const idP = useParams()
    console.log(character)

    const episodio: IEpisodio = {
     id: 0,
     nombre: "",
     numeroDeEpisodio: '', 
     fechaDeLanzamiento: new Date()
    }
  
    
    useEffect(()=>{
        dispatch(GET_CHARACTER_ID(idP.id))
        },[])

    return <div className="container">
        
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt="Rick Sanchez"/>
                <div className={"detalle-header-texto"}>

                    <h3>{character.name}</h3>
                    <p>Planeta: {character.location}</p>
                    <p>Genero: {character.gender}</p>
                    <p>Especie: {character.species}</p>
                    <p>Status: {character.status}</p>
                </div>
                {/* <BotonFavorito esFavorito={false} /> */}
            </div>
        </div>
        {/* <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento} id={episodio.id}/>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento}  id={episodio.id}/>
            <TarjetaEpisodio nombre={episodio.nombre} numeroDeEpisodio={episodio.numeroDeEpisodio} fechaDeLanzamiento={episodio.fechaDeLanzamiento}  id={episodio.id}/>
        </div> */}
    </div>
}

export default PaginaDetalle