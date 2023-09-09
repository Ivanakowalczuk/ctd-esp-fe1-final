import {createAsyncThunk} from '@reduxjs/toolkit';
import { ICharacter } from '../../interface/character.interface'


export const GET_CHARACTERS = createAsyncThunk('character/GET_CHARACTERS', async (page:number) : Promise<ICharacter[]>=> {

        const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const data = await resp.json();
        return data;
})

 
   
