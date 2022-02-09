import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters.jsx';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},

    ]
}

handleIncrement = counter => {
    console.log('hi')
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
}

handleDecrement = counter => {
  let counters = [...this.state.counters];
  let index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({ counters }) 
}

handleDelete = (counterId) => {
    console.log('Event handler called', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })

}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({ counters })
}

toggleLike = () => {
  console.log('liked!')
}
  
render() {
  return (
    <React.Fragment>
        < Navbar totalCounters={this.state.counters.length}/>
        <main className='container'>
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
           />
        </main>
    </React.Fragment>
  );
}

}

export default App;
