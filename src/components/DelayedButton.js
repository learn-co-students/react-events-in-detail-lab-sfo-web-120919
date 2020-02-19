// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

  handleClickEvent = (event) => {
    console.log(event, "event")
    console.log(this.props)
    console.log(event.target)
    //cannot set the event to a const variable, 
    //even though last lab said we could do either persist() or set to a variable
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    
  }

  render(){
    // console.log(this.props)
    return(
      <button onClick={this.handleClickEvent}></button>
    )
  }
}