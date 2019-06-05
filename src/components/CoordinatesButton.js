import React, { Component } from "react"

export default class CoordinatesButton extends Component {

    
    render () {

        const { onReceiveCoordinates } = this.props

        return (
            <div>
                <button onClick={(e) => onReceiveCoordinates([e.clientX, e.clientY])}>Click me</button>
            </div>
        )
    }
}