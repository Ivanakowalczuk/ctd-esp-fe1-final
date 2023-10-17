import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import characterReducer from "./character/slice";
import characterByID from "./character/sliceOneCharacter";


 const store = configureStore({
    reducer : {
        characters: characterReducer,
        characterByID: characterByID,
        
    }
});


type RootState =  ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;