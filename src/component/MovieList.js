import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { width } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    //padding: 10 ,
    flexGrow: 1,
  },
  
  container: {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    padding : '30px',
    gap : '25px',
    justifyContent : 'space-evenly'
  },
  media: {
    //height: 300,
    //objectFit: 'cover',
    height: '362px',
    width : '345px'
  },
});

const MovieList = (props) => {
    const classes = useStyles();
    return(
        <div>
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
        <Card className={classes.paper}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.movie.Poster}
                    title={props.movie.Title}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                <span style={{fontWeight:'bold' , color:'blue'}}>{props.movie.Title}</span>
                </Typography>
                <Typography gutterBottom variant="h5" component="h5">
                <span style={{fontWeight:'bold'}}>Year </span> : {props.movie.Year}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5">
                    <span style={{fontWeight:'bold'}}>Type</span> :{props.movie.Type}
                </Typography>
            </CardContent>
            </CardActionArea>
        <CardActions>
        <Button size="small" color="primary" onClick={()=>{props.onMovieSelect(props.movie.imdbID)}}>
          Details
        </Button>
      </CardActions>
    </Card> 
   </Grid>
   </Grid>
 </div>
    );
}

export default MovieList;