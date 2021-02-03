import React from "react"
import "./Card.css"

function getColor(props) {
    /*
    if (props.red) return "Red"
    if (props.green) return "Green"
    if (props.blue) return "Blue"
    if (props.purple) return "Purple"
    return "";
    */
    return props.red ? "Red"
        : props.green ? "Green"
            : props.blue ? "Blue"
                : props.purple ? "Purple"
                    : ""

}

export const Card = (props) => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}