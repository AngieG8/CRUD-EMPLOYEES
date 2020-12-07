import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  check: {
    color: 'rgb(0,255,0)',
  },
  close: {
    color: 'rgb(255,0,0)',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  toolbarContent: { display: 'flex' },
  toolbar: {
    width: '100%',
    padding: theme.spacing(0),
  },
}));

export default useStyles;
