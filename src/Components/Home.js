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
"https://i02.appmifile.com/413_operator_in/13/04/2021/f08968b1e8e54da057166baac02b00a7.jpg",
},
{
	label: "Second Picture",
	imgPath:
"https://oasis.opstatics.com/content/dam/oasis/page/homepage/in/kv-banner/9R-GC-L.jpg",
},
{
	label: "Third Picture",
	imgPath:
"https://i02.appmifile.com/711_operator_in/18/04/2021/c4c62cee146013ff650b3e7bac305b26.jpg",
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