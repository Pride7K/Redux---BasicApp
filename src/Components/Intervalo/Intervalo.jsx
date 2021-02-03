import React from "react"
import { Card } from "../Card/Card"
import { connect } from "react-redux"
import "./Intervalo.css"
import { AlterMaxNumber, AlterMinNumber } from "../../Store/Actions/Numeros/Numeros"

const Intervalo = props => {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.AlterMinNumber(+e.target.value)} name="" id=""  />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.AlterMaxNumber(+e.target.value)} name="" id=""  />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // instancia pro props
        AlterMaxNumber(novoNumero) {
            // action creator que retorna a Action
            const action = AlterMaxNumber(novoNumero)
            dispatch(action)
        },
        AlterMinNumber(novoNumero) {
            const action =  AlterMinNumber(novoNumero)
            dispatch(action)
        }
    }
}
// primeiro parametro no connect =
// estado das propriedades
// segundo = action creator
export default connect(mapStateToProps,mapDispatchToProps)(Intervalo)