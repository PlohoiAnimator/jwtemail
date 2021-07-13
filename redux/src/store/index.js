import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const combineReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(combineReducer, composeWithDevTools())