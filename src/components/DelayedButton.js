import React, {Component} from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        // the reeason for persist is that we lose the event object to the pool by the time we inspect the object
        // so we can either assign to to a variable  event = event.target or event.persist()
        event.persist()
        setInterval( () =>
            this.props.onDelayedClick(event),
            this.props.delay
            )
        }
    
    render(){
        return(
            <button onClick= {this.handleClick}/>
        )
    }
}
