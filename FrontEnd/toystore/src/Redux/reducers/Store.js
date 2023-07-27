import { createStore, legacy_createStore } from "redux";
import { reducers } from "./ReducersCombine";

export const store= createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)