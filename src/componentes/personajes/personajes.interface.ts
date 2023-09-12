import { ICharacter } from "../../interface/character.interface";


export interface ITarjetaPersonaje {
    id: number
    nombre: string;
    imagenUrl: string;
    esFavorito: boolean
   
  }

  export interface IGrillaPersonajes{
    initialCharacters: ICharacter[]
  }

  export interface IFiltros{
    pageValue: number
  }

