import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        const { delay, onDelayedClick } = this.props
        // console.log("props", onDelayedClick)
        return (
            <div>
                <button onClick={(e) => { e.persist();
                setTimeout(() => onDelayedClick(e), delay)}}>No, click me!!!</button>
            </div>
        )
    }
}