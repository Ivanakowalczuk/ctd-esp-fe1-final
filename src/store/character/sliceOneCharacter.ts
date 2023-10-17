import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_CHARACTER_ID, characterByID } from "./thunk";
import { ICharacter } from "../../interface/character.interface";

 
export interface ICharachterById{
    character: ICharacter;
    isLoading: boolean;
    isError: string;
}

const initialState : ICharachterById= {
    character: {
        id: 0,
        name: "",
        image: "",
        gender: "",
        location: "",
        esFavorito: false,
    },
    isLoading: false,
    isError: "",
}


export const characterSlice = createSlice({
    name : 'characterByID',
    initialState: initialState,
    reducers : {
             
    },
    extraReducers:(builder)=>{

builder.addCase(GET_CHARACTER_ID.pending, ( state   ) => {
    state.isLoading = true;
})

builder.addCase(GET_CHARACTER_ID.fulfilled, (state, action : PayloadAction<characterByID>) => {
 state.character.name= action.payload.name
 state.character.image= action.payload.image
 state.character.location= action.payload.location
 state.character.gender=action.payload.gender
 state.character.species=action.payload.species
 state.character.status= action.payload.status

})

builder.addCase(GET_CHARACTER_ID.rejected, ( state, action ) => {
    state.isLoading = false;
    state.isError = action.error.message ?? 'Ha ocurrido un error'
    
    
})
    }
})


const characterID = characterSlice.reducer;

export default characterID;