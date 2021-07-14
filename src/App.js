import React,{useCallback,useState} from 'react';
import MovieInfo from './component/MovieInfo';
import './App.css';
import axios from 'axios';
import MovieList from './component/MovieList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/icons/Button';
import Button from '@material-ui/core/Button';
//import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function App() {
  const classes = useStyles();

  const[movie,setMovie] = useState([]);
  const[search,setSearch] = useState("");
  const[selectMovie,onMovieSelect] = useState();
  //const key = process.env.REACT_APP_API_KEY;
 // console.log(key);  
    const fetchData = useCallback(() =>{
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=38225274`).then(
            response => {
                //response.json();
                setMovie(response.data.Search);
                console.log(response.data);
            }
        )
    },[search]);
  return (
    <div className="App">
       <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie App
          </Typography>
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          </div>
          <Button color="inherit" onClick={fetchData}>
          Fetch
        </Button>
        </Toolbar>
      </AppBar>
      {selectMovie && <MovieInfo selectMovie={selectMovie} onMovieSelect={onMovieSelect}/>}
      {movie?.length ? (
        movie.map((movie,index) => (
          <MovieList key={index}
          movie={movie}
          onMovieSelect={onMovieSelect} />
        ))) : null
        }
    </div>
    </div>
  );
}

export default App;
