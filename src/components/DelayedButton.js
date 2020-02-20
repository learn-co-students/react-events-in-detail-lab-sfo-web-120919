// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component
{
    render()
    {
        // var delay = this.props.delay
        return(
            <div>
                <button onClick={(event)=>{
                    event.persist();
                    window.setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay)
                }}>
                    Click delay
                </button>
                {/* <button onClick={this.handleDelay}>
                    Click delay
                </button> */}
            </div>
        )
    }
    handleDelay(event)
    {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
    }
}

export default DelayedButton