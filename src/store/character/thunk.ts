import {createAsyncThunk} from '@reduxjs/toolkit';
import { ICharacter } from '../../interface/character.interface';


export const GET_CHARACTERS = createAsyncThunk('character/GET_CHARACTERS', async () : Promise<ICharacter[]>=> {
        const resp = await fetch('https://rickandmortyapi.com/api/character')
        const data = await resp.json();
        return data;
})

