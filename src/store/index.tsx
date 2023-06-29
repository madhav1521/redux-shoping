import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions/UiSlice";
import CartSlice from "./actions/CartSlice";

import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
  };
  
  const persistedReducer = persistReducer(persistConfig, combineReducers({
    ui: cartSlice.reducer,
    cart: CartSlice.reducer
  }));
  
  const store = configureStore({
    reducer: persistedReducer
  });

  
export default store;