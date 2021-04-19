import React,{useContext,useState} from 'react';
import {ProductContext} from "../Context";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/** card style */
const cardStyles = makeStyles({
  root: {
    maxWidth:300,
    margin:15,
    border:10
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },  
  },
}));
//
const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    flexWrap:"wrap"
  },
}));



const Product=({children})=>{
    const card=cardStyles();
    const classes =useStyles();
    const grid=gridStyle();
    const{post,setCart,cart,productLoading,addtoBuy,buy,changeasc,changedsc,reset}=useContext(ProductContext);
    const[search,setSearch]=useState("");
   
    
    /**  */

    window.localStorage.setItem('buyproduct', JSON.stringify(buy));

    // snack Bar

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }; 
    

    
   
  // add to cart
    const addToCart=(item)=>{


      
      
      setCart([...cart,item])
    
    }
  //storing cart values in local storage
    window.localStorage.setItem('cartItems', JSON.stringify(cart));

    /**filter by product */

    const filter=post.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    /** sort */

   
if(productLoading){
      return(
        <div className={classes.root}>
            <LinearProgress color="primary" value={10} />
            <LinearProgress color="primary" value={10} />
         </div>
      )
    }else{
      return(
        <div>
      <div className={grid.root}>
          <Grid container spacing={8}>
           <Grid item xs={2} > 
           <Typography gutterBottom variant="h5" component="h6">Filter by search </Typography>
           <TextField id="standard-basic=" label="Search product and more" onChange={(e)=>setSearch(e.target.value)}/>
           <div style={{display:"block"}}>
            <p></p>
            <p></p>
            <p></p>
           <Typography gutterBottom variant="h5" component="h6">Filter by price</Typography>
           <Button size="large" color="secondary" onClick={()=>changeasc()}>lower to higher</Button>
           <Button size="large" color="secondary" onClick={()=>changedsc()}>higher to lower</Button>
           <Button size="large" color="secondary" onClick={()=>reset()}>Reset</Button>
           </div>
           
           </Grid>
             <Grid item xs={12} sm={6}>   
             <p></p>
                     <div style={{display:"flex",flexWrap:"wrap"}}>{filter.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>
                                 <CardMedia component="img" alt="product" height="150" image={item.img} title="mobile" />
                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6"> Brand:{item.name} </Typography>
                                    <Typography gutterBottom variant="h6" component="h6">Price: {item.price} </Typography>
                                    </CardContent>  
                                </CardActionArea>
                             <CardActions> 
                               <Button onClick={handleClick}>
                                
                                <Button size="small" color="primary" onClick={()=>addToCart(item) }> add to cart <ShoppingCartIcon ></ShoppingCartIcon>
                               
                                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                    added to cart
                                     </Alert>
                                     </Snackbar>
                                </Button>
                                </Button>
                                <a href="/Buy"><Button size="small" color="primary"  onClick={()=>addtoBuy(item)}> Buy now<ShopRoundedIcon></ShopRoundedIcon></Button></a> 
                             </CardActions>
                             </Card>
                            </div> 
                         )}
                      </div>
              </Grid>
              
      </Grid>
    </div>
      </div>
      )
   } 
  }
export default Product;





