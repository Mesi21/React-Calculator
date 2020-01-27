import React from 'react';
// eslint-disable-next-line no-unused-vars
import calculate from 'calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';


function App() {
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
