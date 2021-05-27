import React from 'react';
import PropTypes from "prop-types";
import Movie from './Movie';

const MoviesList = ({lista}) => {

    return ( 

        <div>
           <div className = "movieslist-container">
          
            {lista.map(  (movie) => (<div className = "movieslist-item" key = {movie.imdbID}>

                <Movie movie={movie}/>

                </div>))
            
            }
           </div>
        </div>


     );
}


MoviesList.propTypes = {
    lista : PropTypes.array,

};

 
export default MoviesList;