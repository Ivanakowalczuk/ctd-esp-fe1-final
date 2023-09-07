import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_CHARACTERS } from './thunk';
import { ICharacter} from '../../interface/character.interface';


export type CharacterState = {
allCharacters: ICharacter[],
isLoading: boolean,
isError: string | null
}


const initialState : CharacterState= {
    allCharacters: [],
    isLoading: true,
    isError :  null
    
}

export const todoSlice = createSlice({
    name : 'character',
    initialState: initialState,
    reducers : {
     
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_CHARACTERS.pending, ( state   ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<ICharacter[]>) => {
            state.allCharacters = action.payload;
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })


}
});


const characterReducer = todoSlice.reducer;
// export const {GET_CHARACTERS} = todoSlice.actions;
export default characterReducer;