import React ,{useContext,useState}from 'react';
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
import Link from '@material-ui/core/Link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
    height:"500",
    margin:1,
    border:10,
  },
});

 
   const Buy=()=>{
    const grid=gridStyles();
    const card=cardStyles();
    const {buy} =useContext(ProductContext);
    const[count,setCount]=useState(1)   
    const [value,setValue]=useState(1)
    const[used,setused]=useState(false);

  const handleoffer=(item)=>{
     setValue((item.priceinfo*count)*5/100)
     setused(true)
  }
  const handleval=()=>{
     window.localStorage.setItem("count",count);
  }
    
       return (
          <div className={grid.root}>
          <Grid container spacing={3}>
            <Grid item xs>
            <div>{buy.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>
                               <CardMedia component="img" alt="product" height="800" image={item.img} title="mobile" />
                                </CardActionArea>
                             </Card>
                            </div> 
                         )}
                      </div>
             
            </Grid>
            <Grid item xs={6}>
            <div>{buy.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6"> {item.name} </Typography>
                                    <Typography gutterBottom variant="h6" component="h6"> {item.price} </Typography>
                                    <Typography gutterBottom variant="body2" component="textSecondary">{item.info}</Typography>
                                   <Link href="/adress"> <Button size="large" color="primary" onClick={handleval}>Payment and Address< ChevronRightIcon></ChevronRightIcon></Button></Link>
                                    <hr/>
                                    <Typography gutterBottom variant="h6" component="h6">Review</Typography>
                                    
                                    <Typography gutterBottom variant="h6" component="h6">{item.review.map(review=>(
                                       <CardContent>
                                          <Typography gutterBottom variant="h6" component="h6"> {review} </Typography>
                                          </CardContent>      
                                   ))}</Typography>
                                    </CardContent>  
                                </CardActionArea>
                             <CardActions>
                             
                             </CardActions>
                             </Card>
                            </div> 
                         )}
                      </div>         
            </Grid>
            <Grid item xs>
            <div>{buy.map((item)=>
                          <div key={item.id}>
                            <Card className={card.root}>
                               <CardActionArea>
                                   <CardContent>   
                                   <Typography gutterBottom variant="h6" component="h6"> price:{(item.price)} </Typography> 
                                   <Button size="medium" color="secondary" onClick={()=>setCount(count+1)}>+</Button> 
                                   <Typography gutterBottom variant="h4" component="h4">Count: {count} </Typography> 
                                   <Button size="medium" color="secondary" onClick={()=>setCount(count-1)} disabled={count===1} >-</Button> 
                                   <Typography gutterBottom variant="h4" component="h4"> {} </Typography>
                                   <hr/>
                                   <Typography gutterBottom variant="h4" component="h4">Price: {(item.priceinfo*count)} </Typography> 
                                   <Typography gutterBottom variant="h4" component="h4">Offer: {(value).toFixed(0)} </Typography>   
                                   <Typography gutterBottom variant="h4" component="h4"> Total Price: {((item.priceinfo*count)-value).toFixed(0)} </Typography>
                                   <hr/>
                                   <Typography gutterBottom variant="h6" component="h6">Apply coupoun </Typography>
                                   <Typography gutterBottom variant="h6" component="h6">Offer 5% </Typography>
                                   <Button size="medium" color="secondary" disabled={used===true} onClick={()=>handleoffer(item)}>Apply coupoun</Button> 
                                  </CardContent>  
                                </CardActionArea>
                             </Card>
                            </div> 
                         )}
                      </div>
            </Grid>
          </Grid>
        </div>
         ) 
            }
export default Buy;


