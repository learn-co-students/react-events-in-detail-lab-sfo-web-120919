// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    handleButtonClick = (e) => {
        e.persist() 
        setTimeout(() => this.props.onDelayedClick(e)  , this.props.delay)
    }


    render() {
        return <button onClick={this.handleButtonClick}>delayed Button</button>
    }
}

export default DelayedButton