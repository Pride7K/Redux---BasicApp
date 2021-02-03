
import {NUM_MAX_ALTER,NUM_MIN_ALTER} from "../ActionTypes/ActionTypes"

//Action Creator
function AlterMaxNumber(novoNumero) {
    return {
        type: NUM_MAX_ALTER,
        payload: novoNumero
    }
}
//Action Creator
function AlterMinNumber(novoNumero) {
    return {
        type: NUM_MIN_ALTER,
        payload: novoNumero
    }
}

export { AlterMaxNumber, AlterMinNumber }