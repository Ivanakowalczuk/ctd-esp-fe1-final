export interface ICharacter {
    id:      number;
    name:    string;
    image:   string;
    esFavorito: boolean
    pageNext?: string 
    pagePrev?: string 

   
}

export interface IAllCharacters{
        allCharacters: ICharacter[]
        nextPage: string 
        prevPage: string 
    }
    
