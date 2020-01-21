import React from 'react';
import PropTypes from 'prop-types';

function Display({ solution }) {
  return (
    <div id="Display"><h3>{solution}</h3></div>
  );
}

Display.propTypes = {
  solution: PropTypes.string,
};

Display.defaultProps = { solution: '0' };

export default Display;
