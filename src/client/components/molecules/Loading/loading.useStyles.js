import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loading: {
    height: 'fit-content',
    position: 'relative',
  },
  image: {
    position: 'absolute',
  },
  small: {
    width: '50px',
  },
  medium: {
    width: '100px',
  },
  large: {
    width: '200px',
  },
  loadingSpinner: {
    animation: '$loading 1s linear infinite',
  },
  '@keyframes loading': {
    from: {
      transform: ' rotate(0deg)',

    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));

export default useStyles;
