import {createAsyncThunk} from '@reduxjs/toolkit';
import { ICharacter } from '../../interface/character.interface';


export const GET_CHARACTERS = createAsyncThunk('todo/GET_TODOS', async () : Promise<ICharacter[]>=> {
        const resp = await fetch('https://rickandmortyapi.com/api/character')
        const data = await resp.json();
        return data;
})

console.log(GET_CHARACTERS())