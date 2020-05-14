import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../style/ButtonPanel.css';

function ButtonPanel({ clickHandler }) {
  const handleClick = (btnName) => clickHandler(btnName);
  return (
    <div id="btnPanel">
      <div className="rows">
        <Button btnName="AC" clickHandler={handleClick} />
        <Button btnName="+/-" clickHandler={handleClick} />
        <Button btnName="%" clickHandler={handleClick} />
        <Button btnName="÷" clickHandler={handleClick} />
      </div>

      <div className="rows">
        <Button btnName="7" clickHandler={handleClick} />
        <Button btnName="8" clickHandler={handleClick} />
        <Button btnName="9" clickHandler={handleClick} />
        <Button btnName="X" clickHandler={handleClick} />
      </div>

      <div className="rows">
        <Button btnName="4" clickHandler={handleClick} />
        <Button btnName="5" clickHandler={handleClick} />
        <Button btnName="6" clickHandler={handleClick} />
        <Button btnName="-" clickHandler={handleClick} />
      </div>

      <div className="rows">
        <Button btnName="1" clickHandler={handleClick} />
        <Button btnName="2" clickHandler={handleClick} />
        <Button btnName="3" clickHandler={handleClick} />
        <Button btnName="+" clickHandler={handleClick} />
      </div>

      <div className="rows">
        <Button btnName="0" wide clickHandler={handleClick} />
        <Button btnName="." clickHandler={handleClick} />
        <Button btnName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
