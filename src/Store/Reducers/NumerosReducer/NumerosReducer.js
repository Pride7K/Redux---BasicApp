import {NUM_MAX_ALTER,NUM_MIN_ALTER} from "../../Actions/ActionTypes/ActionTypes"

const initialState = {
    min: 0,
    max: 0
}

function NumerosReducer (state = initialState, action) {

    switch (action.type) {
        case NUM_MIN_ALTER:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTER:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }

}

export default NumerosReducer;