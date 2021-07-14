import React,{useCallback,useState} from 'react';
import MovieInfo from './component/MovieInfo';
import './App.css';
import axios from 'axios';
import MovieList from './component/MovieList';

function App() {
  const[movie,setMovie] = useState([]);
    const[search,setSearch] = useState("");
    
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
      Movie Finder App
      <input type="text" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
        <button onClick={fetchData}>Fetch</button>
      <MovieInfo/>
      {movie?.length ? (
        movie.map((movie,index) => (
          <MovieList key={index}
          movie={movie} />
        ))) : null
        }
    </div>
  );
}

export default App;
