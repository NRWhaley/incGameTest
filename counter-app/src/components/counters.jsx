import React, { Component } from 'react';
import Counter from './counter.jsx'
class Counters extends Component {


    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement, toggleLike} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
              { counters.map(counter => ( 
              <Counter key={counter.id} 
              onDelete={onDelete} 
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              toggleLike={toggleLike}
              counter={counter}/>
              ))}
            </div>
        )
    }

}

export default Counters;