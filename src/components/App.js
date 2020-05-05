import React from 'react';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (btnName) => {
    const res = calculate(this.state, btnName);
    this.setState({ ...res });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div id="app">
        <Display result={next || total} />
        <ButtonPanel clickHandler={this.handleClick()} />
      </div>
    );
  }
}

export default App;
