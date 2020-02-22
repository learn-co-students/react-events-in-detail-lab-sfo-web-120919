import React from 'react'

class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY
        let arr = [x, y]
        this.props.onReceiveCoordinates(arr)
        
    }

    render(){
        return <button onClick={this.handleClick}>COORDINATES BUTTON</button>
    }
}

export default CoordinatesButton