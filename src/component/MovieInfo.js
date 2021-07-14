import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';


const MovieInfo = (props) => {
    const[movieInfo,setMovieInfo] = useState();
    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${props.selectMovie}&apikey=${process.env.REACT_APP_API_KEY}`,
        ).then((response) => {setMovieInfo(response.data);
        console.log(response.data);});
      }, [props.selectMovie]);
    return(
         <div>
             {movieInfo ? (
                 <div>
                 <img src={movieInfo.Poster} alt={movieInfo.Title} />
                 <h3>{movieInfo.Title}</h3>
                 </div>
             ):null}
         </div>

    );
}

export default MovieInfo;