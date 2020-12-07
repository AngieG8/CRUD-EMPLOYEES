import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  background: 'rgba(0, 0, 0, 0.55)',
  justifyContent: "center",
  alignItems: "center",
  height: "80px",
  width: "100%",
  },
  logo: {
    margin: "0px 10px"
  },
  divider: {
    height: '85%',
    background: '#fff',
  },
}));

export default useStyles;
