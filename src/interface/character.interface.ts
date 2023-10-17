export interface ICharacter {
    id:      number;
    name:    string;
    image:   string;
    location?: string;
    gender?: string;
    species?: string;
    status?: string
    esFavorito: boolean
     
}

export interface IAllCharacters{
        allCharacters: ICharacter[]
        nextPage: string 
        prevPage: string 
    }
    
