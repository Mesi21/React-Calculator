import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div id="btnPanel">
      <div className="rows">
        <Button btnbtnName="AC" />
        <Button btnbtnName="+/-" />
        <Button btnbtnName="%" />
        <Button btnbtnName="÷" />
      </div>

      <div className="rows">
        <Button btnbtnName="7" />
        <Button btnbtnName="8" />
        <Button btnbtnName="9" />
        <Button btnbtnName="X" />
      </div>

      <div className="rows">
        <Button btnName="4" />
        <Button btnName="5" />
        <Button btnName="6" />
        <Button btnName="-" />
      </div>

      <div className="rows">
        <Button btnName="1" />
        <Button btnName="2" />
        <Button btnName="3" />
        <Button btnName="+" />
      </div>

      <div className="rows">
        <Button btnName="0" />
        <Button btnName="." />
        <Button btnName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
