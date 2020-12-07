import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './buttonAction.styles';

const ButtonAction = (props) => {
  const {
    children, disabled, onClick, className, component,
  } = props;

  const classes = useStyles();

  return (
    <Button
      className={`${className} ${classes.button}`}
      fullWidth
      component={component}
      onClick={onClick}
      color="primary"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

ButtonAction.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  component: PropTypes.string,
  className: PropTypes.string,
};

ButtonAction.defaultProps = {
  className: '',
  onClick: undefined,
  component: 'button',
  disabled: false,
};

export default ButtonAction;
