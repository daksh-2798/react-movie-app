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
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MovieList = (props) => {
    const classes = useStyles();
    return(
        <div>
        {/* <h3>Movie List</h3> */}
        <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.movie.Poster}
          title={props.movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <span style={{fontWeight:'bold'}}>Movie Name </span> : {props.movie.Title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          <span style={{fontWeight:'bold'}}>Year </span> : {props.movie.Year}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <span style={{fontWeight:'bold'}}>Type</span> :{props.movie.Type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card> 
     </Grid>   
        </div>
    );
}

export default MovieList;