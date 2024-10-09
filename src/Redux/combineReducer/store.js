import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import User from "../reducer/User";
import productSlice from "../reducer/productSlice";

const rootReducer = combineReducers({
    User,
    products: productSlice
});


const store = configureStore({
    reducer: rootReducer
});

export default store;




