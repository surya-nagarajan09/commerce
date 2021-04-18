import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


// gird style

const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// text filed style
const textStyles= makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '45ch',
        diplay:"block",
        
      },
    },
  }));
  // button textStyles
  const buttonStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        align:"center"
      },
    },
  }));
  
  

  // main function

const Adress=({children})=> {
  const classes = gridStyle();
  const text=textStyles();
  const button=buttonStyles()
  const[adress,setAdress]=useState({fullName:"",Pincode:"",flat:"",area:"",landmar:"",city:"",state:"",gender:"",time:""});

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography component="h4" variant="h4">Address and Paymnet options</Typography>
           <form className={text.root}  autoComplete="on" >
                <TextField id="standard-basic"  type="text" placeholder="Full Name"  onChange={(e)=>setAdress({...adress,fullName:e.target.value})} />
                <TextField id="standard-basic"  type="number" placeholder="Mobile number" onChange={(e)=>setAdress({adress,number:e.target.value})} />
                <TextField id="standard-basic"  type="number" placeholder="PIN code" onChange={(e)=>setAdress({...adress,pincode:e.target.value})} />
                <TextField id="standard-basic"  type="text" placeholder="Flat,House no,Company" onChange={(e)=>setAdress({...adress,flat:e.target.value})}/>
                <TextField id="standard-basic"  type="text" placeholder="Area,colony,street,Village" onChange={(e)=>setAdress({...adress,area:e.target.value})}/>
                <TextField id="standard-basic"  type="text" placeholder="Land mark" onChange={(e)=>setAdress({...adress,city:e.target.value})}/>
                
                <div className={button.root}>
                <Button variant="contained" type="submit"  color="primary">submit</Button>
             <Link href="/placeorder"> <Button></Button>  <ChevronRightIcon></ChevronRightIcon></Link>
            
                </div>
           </form>
           
          </Grid>
        <Grid item xs>
       </Grid>
      </Grid>
    </div>
  );

}


export default Adress;