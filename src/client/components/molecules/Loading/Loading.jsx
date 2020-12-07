import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import useStyles from './loading.useStyles';

const Loading = (props) => {
  const classes = useStyles();
  const { size } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.loading}>
        <img className={clsx(classes.image, classes[size])}
         src="/static/descarga.png"
        alt="loading" 
        />
        <img
          className={clsx(classes.loadingSpinner, classes[size])}
          src="/static/descarga.png"
          alt="loading ring"
        />
      </Box>
    </Box>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: 'medium',
};

export default Loading;
