import React from 'react'

export default class CoordinatesButton extends React.Component {
    render() {
        return <button onClick={this.handleClick}></button>
    }

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

}
