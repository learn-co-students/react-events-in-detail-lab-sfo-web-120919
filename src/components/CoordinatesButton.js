// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {


  handleClick = (event) => {
    // console.log(event.clientX, "x coord")
    // console.log(event.clientY, "y coord")
    let arr = []
    arr.push(event.clientX)
    arr.push(event.clientY)
    // console.log(this.props.onReceiveCoordinates(arr))
    this.props.onReceiveCoordinates(arr)
   
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}