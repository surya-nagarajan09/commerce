import React,{useContext} from "react";
import {ProductContext} from "../Context";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

//icon badge icon
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);




const gridStyles= makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
 

export default function ButtonAppBar() {

  const {disable}=useContext(ProductContext)

  const grid=gridStyles();
  const classes = useStyles();


 
  const handleLogout=()=>{
    sessionStorage.clear();
  }

  return (
    <div className={grid.root}>
      <div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/products">products</Button>
          <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
          
      <Button color="inherit" href="/cart">cart</Button>
      <StyledBadge color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
          </IconButton>
          <Button color="inherit" href="/login">login/signup</Button>
          <Button color="inherit" disabled={disable===true} href="/" onClick={()=>handleLogout()}>Logout</Button>
          
        </Toolbar>
      </AppBar>
    </div>
             
        </Grid>
      </Grid>
      
    </div>
  );
}



