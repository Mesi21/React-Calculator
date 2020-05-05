import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

function Button({
  btnName, color, wide, clickHandler,
}) {
  const color2 = 'lightGray';
  const handleClick = (btnName) => clickHandler(btnName);
  const buttonStyle = {
    width: wide ? '50%' : '25%',
    backgroundColor:
      btnName === 'X'
      || btnName === '÷'
      || btnName === '-'
      || btnName === '+'
      || btnName === '='
        ? color
        : color2,
    border: '1px solid #A0A0A0',
  };
  return (
    <button type="button" style={buttonStyle} onClick={handleClick(btnName)}>
      {btnName}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#FF7F50',
};

export default Button;
