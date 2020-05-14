import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: 0,
      operation: '',
    };
  }

  returnError = (err) => err;

  handleClick = (btnName) => {
    try {
      const { total, operation } = calculate(btnName, this.state);
      this.setState({ total, operation });
    } catch (err) {
      this.returnError();
    }
  };

  render() {
    const { total } = this.state;
    const result = total.toString();
    return (
      <div id="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
