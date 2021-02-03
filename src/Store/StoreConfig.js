import { createStore, combineReducers } from "redux"
import NumerosReducer from "./Reducers/NumerosReducer/NumerosReducer"


const reducers = combineReducers({
    numeros: NumerosReducer,
})

export default function StoreConfig() {
    return createStore(reducers)
}
