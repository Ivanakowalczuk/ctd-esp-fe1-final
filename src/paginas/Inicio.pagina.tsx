import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio/> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    let anterior = true;
    let siguiente= false;
   
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar Filtro</button>
        </div>
        <Filtros />
        <Paginacion anterior={anterior} siguiente={siguiente} />
        <GrillaPersonajes />
        <Paginacion anterior={anterior} siguiente={siguiente}/>
    </div>
}

export default PaginaInicio