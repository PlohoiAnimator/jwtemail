import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    countReducer, userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))