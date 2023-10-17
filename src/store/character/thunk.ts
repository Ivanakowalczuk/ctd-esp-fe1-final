import {createAsyncThunk} from '@reduxjs/toolkit';
import { IAllCharacters, ICharacter } from '../../interface/character.interface'
import { ICharachterById } from './sliceOneCharacter';

/**
 * Llama a la API y trae la data. Necesita recibir la URL solicitada.
 * @author 'Ivana Kowalczuk'
 * @param {string} recibe como parámetro un string con la url solicitada. 
 * @return {Array}
 */
export const urlBase= 'https://rickandmortyapi.com/api/character/'

export const GET_CHARACTERS = createAsyncThunk(
        'character/GET_CHARACTERS',
        async (urlBase: string): Promise<IAllCharacters> => {
                
                try {
                        const resp = await fetch(urlBase);
                        const data = await resp.json();
                        const resultsCharacters = {
                                allCharacters: data.results,
                                nextPage: data.info.next,
                                prevPage: data.info.prev
                        }
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }
                     
        }
      );
   

      /**
 * Llama a la API y trae la data filtrada por nombre. Necesita recibir el nombre buscado.
 * @author 'Ivana Kowalczuk'
 * @param {string} recibe como parámetro un string con el nombre buscado o un null si el nombre buscado no existe
 * @return {IAllCharacters} retorna un objeto que contirn array de personajes filtrados por nombre, pagina siguiente y página anterior 
 */
      export const GET_CHARACTERS_FILTER = createAsyncThunk(
        'character/GET_CHARACTERS_FILTER',
        async ({name}: {name: string | null | undefined}): Promise<IAllCharacters> => {
                
                try {
                        const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
                        const data = await resp.json();
                        const resultsCharacters: IAllCharacters = {
                        allCharacters: data.results,
                        nextPage: data.info.next,
                        prevPage: data.info.prev
                        }
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }
                     
        }
      );
   

      /**
 * Llama a la API y trae un personaje por ID. 
 * @author 'Ivana Kowalczuk'
 * @param {string} recibe como parámetro un número de id. 
 * @return {ICharacter} retorna un objeto de tipo ICharachter
 */

      export interface characterByID{
        name: string;
        image: string;
        gender: string;
        episode:[];
        location: string,    
        species: string,
        status: string
        
      }
export const GET_CHARACTER_ID = createAsyncThunk('character/GET_CHARACTERS_ID', async (id: string | undefined) : Promise<characterByID>=> {
  try{
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await resp.json();
    const characterById: characterByID = {
    name: data.name,
    image: data.image,
    gender: data.gender,
    episode:data.episode,
    location: data.location.name,
    species: data.species,
    status: data.status

     
}
       return characterById;
  }catch(error){
    console.error('Error fetching data:', error);
    throw error;
  }
      
})
