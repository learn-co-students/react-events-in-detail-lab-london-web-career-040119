import React from 'react'

export default class DelayedButton extends React.Component {
    render() {
        return <button onClick={this.handleClick}></button>
    }

    handleClick = event => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
}
 