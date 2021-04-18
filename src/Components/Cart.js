import React ,{useContext}from 'react';
import {ProductContext} from "../Context"

//styles from materil ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: "full",
  },
  media: {
    height: 300,
  },
});
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



  const Cart=()=>{
    const classes = useStyles();
    const grid=gridStyles();
    const card=cardStyles();
    const {cart,setCart,buy,addtoBuy} =useContext(ProductContext);

       const Remove = (item)=> {
         const userSelect= prompt("Enter yes/no")
            if(userSelect==="yes"){
              const indexes = cart.indexOf(item);
              const temp = [...cart];
              temp.splice(indexes, 1);
              setCart(temp);
              
         }
     };
     
     window.localStorage.setItem('buyproduct', JSON.stringify(buy));
     

     if(cart.length===0) {
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.canstockphoto.com/empty-cart-30889814.html"
              title="cart empty"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
              Your  Cart is empty. 
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
              Your Shopping Cart lives to serve. Give it purpose — fill it with phones and more.
              Continue shopping on the productpage.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" href="/products" color="primary">
             Go to Shopping
            </Button>
          </CardActions>
        </Card>
      ) }else{
        return (
          <div className={grid.root}>
          <Grid container spacing={3}>
            <Grid item xs>
            <div>{cart.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>
                               <CardMedia component="img" alt="product" height="256" image={item.img} title="mobile" />
                                </CardActionArea>
                             </Card>
                            </div> 
                         )}
                      </div>
             
            </Grid>
            <Grid item xs={6}>
            <div>{cart.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>

                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6"> {item.name} </Typography>
                                    <Typography gutterBottom variant="h6" component="h6"> {item.price} </Typography>
                                    <Typography gutterBottom variant="body2" component="textSecondary"> {item.info} </Typography>

                                    </CardContent>  
                                </CardActionArea>
                             <CardActions>
                                <Button size="small" color="primary" onClick={()=>Remove(item)}>Remove from Cart</Button>
                              <a href="/Buy"><Button size="small" color="primary"  onClick={()=>addtoBuy(item)}> Buy now </Button></a> 
                             </CardActions>
                             </Card>
                            </div> 
                         )}
                      </div>
              
            </Grid>
            <Grid item xs>
             
            </Grid>
          </Grid>
        </div>
         ) }

}
export default Cart;


