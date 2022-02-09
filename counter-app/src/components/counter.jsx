import React, { Component } from 'react';


class Counter extends React.Component {

   styles = {
       fontSize: 20,
       fontWeight: 'italic',
       color: 'red'
       }

  
 
     

    render() {
        const {counter, onDelete, onIncrement, onDecrement, toggleLike} = this.props;
        return (
           
            <div class='row'> 
                <div class='col-sm'><span style={this.styles}>{this.formatCount(counter)}</span></div>
                <div class='col-sm'>  <button onClick={() => onIncrement(counter)}>+</button></div>
                <div class='col-sm'><button onClick={() => onDecrement(counter)}>-</button></div>
                <div class='col-sm'><button onClick={() => toggleLike()}><i class="bi-heart"></i></button></div>
                <div class='col-sm'><button className="btn btn-danger btm-sm m-2" onClick={() => onDelete(counter.id)}>Delete</button></div>
            
                      
            </div>

        )
    }
    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;