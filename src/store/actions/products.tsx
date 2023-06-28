import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {}
const productSlice = createSlice({
    name: 'product',
    initialState:initialProductState,
    reducers:{}
})

export const productActions = productSlice.actions
export default productSlice;