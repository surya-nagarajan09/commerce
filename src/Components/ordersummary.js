import React ,{useContext}from 'react';
import {ProductContext} from "../Context"

//styles from materil ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "full",
//   },
//   media: {
//     height: 300,
//   },
// });
const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const cardStyles = makeStyles({
  root: {
    maxWidth:"fullWidth",
    margin:10,
    border:10
  },
});



  const Order=()=>{
    // const classes = useStyles();
    const grid=gridStyles();
    const card=cardStyles();
    const {buy,adress} =useContext(ProductContext);
    console.log(buy);
    console.log(adress);

    
        return (
          <div className={grid.root}>
          <Grid container spacing={3}>
            <Grid item xs>
           
                           
                         
             
            </Grid>
            <Grid item xs={6}>
            
                            <Card className={card.root}>
                               <CardActionArea>{buy.map(item=>(
                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6">{item.name} </Typography>
                                    <Typography gutterBottom variant="h6" component="h6"> {item.price} </Typography>
                                    <Typography gutterBottom variant="body2" component="textSecondary">  </Typography>

                                    </CardContent>  

                               ))}   
                                </CardActionArea>
                             <CardActions>
                                <Button size="small" color="primary">place order</Button>
                             </CardActions>
                             </Card>
                           
              
            </Grid>
            <Grid item xs>
             
            </Grid>
          </Grid>
        </div>
         ) }


export default Order;


