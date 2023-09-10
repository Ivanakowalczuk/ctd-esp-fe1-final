import { ICharacter } from "../../interface/character.interface";

export interface ITarjetaPersonaje {
    nombre: string;
    imagenUrl: string;
    esFavorito: boolean;
  }

  export interface IGrillaPersonajes{
    initialCharacters: ICharacter[]
  }