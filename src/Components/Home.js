import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';



const MyCollection = [
{
	label: "First Picture",
	imgPath:
"https://i.postimg.cc/3JWFBhFt/hgjg.jpg",
},
{
	label: "Second Picture",
	imgPath:
"",
},
{
	label: "Third Picture",
	imgPath:
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
},
];


const useStyles = makeStyles({
  root: {
    maxWidth: "full",
  },
  media: {
    height: 500,
    width: "full",
    alignItems:"center"
  },
});

const Home =()=>  {
  const classes = useStyles();
  const length=MyCollection.length;
 const [index, setActiveStep] =useState(0);

 const goToNextPicture = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

 const goToPrevPicture = () => {
	setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia className={classes.media} href="/products"image={MyCollection[index].imgPath} title={MyCollection[index].label} />
      </CardActionArea>
      <CardActions>
      <Button size="small" onClick={goToNextPicture} disabled={index === length-1} >Next</Button>
        <Button size="small" onClick={goToPrevPicture}  disabled={index === 0}>previos</Button>
      </CardActions>
    </Card>
  );
}


export default Home;