import { combineReducers } from "redux";
import { ProductReducer } from "./Product_Reducer";


export const reducers=combineReducers(
    {
        allProducts : ProductReducer,
    }
)
