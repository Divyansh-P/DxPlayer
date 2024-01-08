import { createSlice } from "@reduxjs/toolkit";


const homeslice=createSlice({
    name:'home',
    initialState:{
    category:0
    },
    reducers:{
    getcategory:(state,action)=>{
    state.category=action.payload
    }
    }
})

export const {getcategory}=homeslice.actions

export default homeslice.reducer