import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {isVisible:false}
const uiSlice = createSlice({
    name: 'ui',
    initialState:initialProductState,
    reducers:{
        toggle(state) {
            state.isVisible=!state.isVisible;
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice;