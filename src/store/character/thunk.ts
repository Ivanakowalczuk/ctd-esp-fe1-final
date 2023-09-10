import {createAsyncThunk} from '@reduxjs/toolkit';
import { ICharacter } from '../../interface/character.interface'

export const GET_CHARACTERS = createAsyncThunk(
        'character/GET_CHARACTERS',
        async ({ dato, parametro }: { dato: number | string ; parametro: string }): Promise<ICharacter[]> => {
                
                try {
                        const resp = await fetch(`https://rickandmortyapi.com/api/character/?${parametro}=${dato}`);
                        const data = await resp.json();
                        const resultsCharacters = data.results;
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }
                     
             
          
        }
      );
   


export const GET_CHARACTER_ID = createAsyncThunk('character/GET_CHARACTERS', async (id: number) : Promise<ICharacter>=> {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json();
        return data;
})
