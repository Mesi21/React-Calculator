import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnName }) {
  return <button type="button">{btnName}</button>;
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
