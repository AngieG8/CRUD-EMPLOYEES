
import  { Box,Divider } from '@material-ui/core';



import useStyles from './header.styles';

const Header = _ => {
	const classes = useStyles();


     return(
	 <Box className={classes.root}>
     <img  className={classes.logo} src="/static/logo-arkix.svg" alt="logo"/>
     <Divider className={classes.divider} orientation="vertical" />
     <img className={classes.logo} src="/static/julius.svg" alt="julius"/>
    </Box>
	);
}

export default Header;