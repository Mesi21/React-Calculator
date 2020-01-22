import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

function Button({ btnName, color, wide }) {
  const buttonStyle = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
    border: '1px solid #A0A0A0',
  };
  return <button type="button" style={buttonStyle}>{btnName}</button>;
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: '#e0e0e0',
};

export default Button;
