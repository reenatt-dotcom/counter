import React, { Component } from 'react';
import Counter from './Counter';
import Button from './Button';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>
          <Button onClick={this.incrementCount} label="Increment" />
        </div>
        <div>
          <Counter count={count} />
        </div>
        <div>
          <Button onClick={this.decrementCount} label="Decrement" />
        </div>
      </div>
    );
  }
}

export default App;
