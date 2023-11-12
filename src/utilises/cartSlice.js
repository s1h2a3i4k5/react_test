import { createSlice } from "@reduxjs/toolkit";

const cardslice = createSlice({
    name : "cart",
    initialState : {
        items:[]
    },
    reducers :{
        addItems : (state,action) =>{
            state.items.push(action.payload)
        },
        clearItems :(state,action) =>{
            state.items.length = 0;
        }
    }
})
export const {addItems,clearItems} = cardslice.actions;
export default cardslice.reducer;