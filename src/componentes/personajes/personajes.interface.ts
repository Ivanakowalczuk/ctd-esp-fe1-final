import { ICharacter } from "../../interface/character.interface";

  export interface IGrillaPersonajes{
    initialCharacters: ICharacter[];

  }

  export interface IFiltros{
    name: string | null,
    setName: (name: string | null  )=> void
    urlBase: string
  }

