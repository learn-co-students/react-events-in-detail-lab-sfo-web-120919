import React from 'react'

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
    }
    
    render(){
        return <button onClick={this.handleClick}>DELAYED BUTTON</button>
    }
}

export default DelayedButton