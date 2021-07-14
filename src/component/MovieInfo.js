import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';


const MovieInfo = (props) => {
    const[movieInfo,setMovieInfo] = useState();
    const Apikey = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${props.selectMovie}&apikey=38225274`
        ).then((response) => {setMovieInfo(response.data);
        console.log(response.data);});
      }, [props.selectMovie,Apikey]);
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