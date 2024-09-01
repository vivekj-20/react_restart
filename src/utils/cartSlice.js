import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems : (state,action) => {
            //mutating the state over here
            state.items.push(action.payload);
        },
        removeItems : (state) =>{
            state.items.pop();  
        },
        clearItems : () =>{
            return {items : []};
        } 
    }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions;
export default cartSlice