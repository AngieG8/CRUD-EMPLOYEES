
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      textPrimary: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(56,191,220)',
        height: '30px',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: '#37c9e8',
          '@media (hover: none)': {
            backgroundColor: '#37c9e8',
          },
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: '30px',
        fontSize: '14px',
      },
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        padding: '5px',
      },
    },
    MuiLinearProgress: {
      root: {
        height: '12px',
        ColorPrimary: {

        },
      },
      barColorPrimary: {
        backgroundColor: '#6DBE85',
      },
    },

  },
  palette: {
    text: {
      primary: 'rgba(110,110,110,1)',
      secondary: 'rgba(100%, 100%, 100%)',
      disabled: 'rgba(183,183,183,1)',
    },
  },
  typography: {
    body1: {
      fontSize: '14px',
      fontFamily: 'Roboto',
    },
    h3: {
      fontSize: '20px',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },

    h4: {
      fontSize: '14px',
      fontFamily: 'Poppins',
    },
    h6: {
      fontSize: '14px',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '16px',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
  },
});

export default theme;
