import React from 'react';
// import { render } from "react-dom";
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// App should implement the render function.
// The render function should display Display and ButtonPanel.
// REMEMBER! JSX will not compile unless your render function
// returns a single element. Wrap the children components with
// div tag and give it an appropriate ID

function App() {
  // render()
  return (
    <div id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
