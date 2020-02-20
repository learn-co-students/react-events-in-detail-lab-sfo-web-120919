// Code CoordinatesButton Component Here
import React from 'react';
class CoordinatesButton extends React.Component
{
    render()
    {
        
        return(
            <div>
            <button onClick={(event)=>{this.props.onReceiveCoordinates([event.clientX, event.clientY])}}> 
            Click me </button>
            {/* <button onClick={this.handleClick}> Click me </button> */}
            </div>
        )
    }
    handleClick(event)
    {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
}

export default CoordinatesButton