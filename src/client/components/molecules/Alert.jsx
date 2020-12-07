import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => 
<MuiAlert 
elevation={6} 
variant="filled" 
{...props} />;

const CustomSnackbar = (props) => {
  const { message, type, handler } = props
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      dispatch(handler({ alert: null }));
      return;
    }
    setOpen(false);
    dispatch(handler({ alert: null }));
  };

  return (
    <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
