import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    buttonClassName,
    buttonOnClick,
    buttonLabel,
    buttonIsDisabled,
  } = props;

  return (
    <button
      className={`btn ${buttonClassName} ${buttonIsDisabled && 'disabled'}`}
      onClick={buttonOnClick}
      disabled={buttonIsDisabled}
    >
      {buttonLabel}
    </button>
  );
};

Button.propTypes = {
  buttonClassName: PropTypes.string,
  buttonOnClick: PropTypes.func,
  buttonLabel: PropTypes.string,
  buttonIsDisabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonClassName: '',
  buttonOnClick: () => {},
  buttonLabel: '',
  buttonIsDisabled: true,
};

export default Button;
