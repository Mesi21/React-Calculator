import React from 'react';
import Button from './Button';
import '../style/ButtonPanel.css';

function ButtonPanel() {
  return (
    <div id="btnPanel">
      <div className="rows">
        <Button btnName="AC" />
        <Button btnName="+/-" />
        <Button btnName="%" />
        <Button btnName="÷" />
      </div>

      <div className="rows">
        <Button btnName="7" />
        <Button btnName="8" />
        <Button btnName="9" />
        <Button btnName="X" />
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
        <Button btnName="0" wide="true" />
        <Button btnName="." />
        <Button btnName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
