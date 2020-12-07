import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  height: '100%',
  width: "100%",
  },
  header: {
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  }
}));

export default useStyles;
